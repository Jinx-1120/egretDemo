/**
 * GameView
 * 游戏界面
 */
class GameView extends egret.Sprite {
    public constructor() {
        super();
        this.init();
    }

    /**
     * _boxGroups
     * msg: 一行格子
     * type: Array => GroupRect
     */
    private _boxGroups:Array<GroupRect>;

    // 分数
    private scoreText:egret.BitmapText;


    /**
     * init()
     * 初始化函数
     */
    private init():void {
        this._boxGroups = [];
        var len:number = GameData.row+1;

        // 循环生成每一列格子
        for(var i:number=0;i<len;i++) {
            var boxg:GroupRect = new GroupRect();
            this._boxGroups.push(boxg);
            this.addChild(boxg);
            boxg.addEventListener(GameEvent.GAME_OVER, this.gameOver, this);
            boxg.addEventListener(GameEvent.GAME_HIT, this.clickRight, this);
        }
        /*
        this.scoreText = new egret.TextField();
        this.scoreText.textColor = 0xff0000;
        this.scoreText.bold = true;
        this.scoreText.size = 100;
        */

        // 设置 分数
        this.scoreText = new egret.BitmapText();

        this.scoreText.x = 180;
        this.scoreText.y = 50;
        this.scoreText.text = String(0);
        this.addChild(this.scoreText);
    }

    /**
     * startgame
     * 开始游戏
     */
    public startgame():void {
        // 初始化分数
        this.scoreText.text = String(0);
        var len:number = GameData.row+1;

        // 循环创建格子
        // 给格子赋值对应位置 y
        for(var i:number=0;i<len;i++) {
            this._boxGroups[i].create();
            this._boxGroups[i].y = 0-GameData.getBoxHeight()*(1+i);
        }
    }


    /**
     * move()
     * 点击正确 移动格子
     */
    public move() {
        var len:number = GameData.row+1;
        for(var i:number=0;i<len;i++) {

            // 游戏加速
            this._boxGroups[i].y += GameData.speed;

            //移动到舞台外侧了
            if(this._boxGroups[i].y>=GameData.getStageHeight()){
                // 如果格子没有被点击 游戏结束
                if(!this._boxGroups[i].isHit) {
                    this.gameOver();
                    return;
                }

                // 设置对应格子的位置
                if(i==0) {
                    this._boxGroups[i].y = this._boxGroups[4].y - GameData.getBoxHeight();
                } else {
                    this._boxGroups[i].y = this._boxGroups[i-1].y - GameData.getBoxHeight();
                }
                this._boxGroups[i].create();
            }
        }
    }

    /**
     * gameOver
     * 游戏结束
     */
    private gameOver(evt:GameEvent=null):void {
        var event:GameEvent = new GameEvent(GameEvent.GAME_OVER);
        this.dispatchEvent(event);
    }

    /**
     * clickRight
     * 游戏继续
     */
    private clickRight(evt:GameEvent):void {
        GameData.setScore(GameData.getScore()+1);
        this.scoreText.text = String(GameData.getScore());
    }



}
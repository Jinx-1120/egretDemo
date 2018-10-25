class GameView extends egret.Sprite
{
    public constructor()
    {
        super();
        this.init();
    }

    private _boxGroups:Array<GroupRect>;

    //private scoreText:egret.TextField;
    private scoreText:egret.BitmapText;

    private init():void
    {
        this._boxGroups = [];
        var len:number = GameData.row+1;
        for(var i:number=0;i<len;i++)
        {
            var boxg:GroupRect = new GroupRect();
            this._boxGroups.push(boxg);
            this.addChild(boxg);
            boxg.addEventListener(GameEvent.GAME_OVER, this.gameOver, this);
            boxg.addEventListener(GameEvent.GAME_HIT, this.gamehit, this);
        }
        /*
        this.scoreText = new egret.TextField();
        this.scoreText.textColor = 0xff0000;
        this.scoreText.bold = true;
        this.scoreText.size = 100;
        */

        this.scoreText = new egret.BitmapText();
        // this.scoreText.font = RES.getRes("number_fnt");

        this.scoreText.x = 180;
        this.scoreText.y = 50;
        this.scoreText.text = String(0);
        this.addChild(this.scoreText);
    }
    public startgame():void
    {
        this.scoreText.text = String(0);
        var len:number = GameData.row+1;
        for(var i:number=0;i<len;i++)
        {
            this._boxGroups[i].create();
            this._boxGroups[i].y = 0-GameData.getBoxHeight()*(1+i);//GameData.getStageHeight()-GameData.getBoxHeight()*(1+i);
        }
    }

    //移动
    public move()
    {
        var len:number = GameData.row+1;
        for(var i:number=0;i<len;i++)
        {
            this._boxGroups[i].y += GameData.speed;
        }
        for(i=0;i<len;i++)
        {
            if(this._boxGroups[i].y>=GameData.getStageHeight())//移动到舞台外侧了
            {
                if(!this._boxGroups[i].isHit)
                {
                    this.gameOver();
                    return;
                }
                if(i==0)
                {
                    this._boxGroups[i].y = this._boxGroups[4].y - GameData.getBoxHeight();
                }
                else
                {
                    this._boxGroups[i].y = this._boxGroups[i-1].y - GameData.getBoxHeight();
                }
                this._boxGroups[i].create();
            }
        }
    }

    private gameOver(evt:GameEvent=null):void
    {
        var event:GameEvent = new GameEvent(GameEvent.GAME_OVER);
        this.dispatchEvent(event);
    }

    private gamehit(evt:GameEvent):void
    {
        GameData.setScore(GameData.getScore()+1);
        this.scoreText.text = String(GameData.getScore());
    }



}
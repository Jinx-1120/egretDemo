/**
 * GroupRect
 * 一行格子
 */
class GroupRect extends egret.Sprite {

    public constructor() {
        super();
        this.init();
    }


    //Graphics方式
    private _boxs:Array<BoxGraphics>;

    // 初始化函数
    private init():void {
        this._boxs = [];
        
        // 生成一行中的每一个格子 并给每个格子添加对应事件
        for(var i:number=0;i<GameData.column;i++) {
            var box:BoxGraphics = new BoxGraphics();
            this._boxs.push(box);
            box.addEventListener(GameEvent.GAME_HIT, this.clickRight, this);
            box.addEventListener(GameEvent.GAME_OVER, this.boxGameOver, this);
            this.addChild(box);
            box.x = GameData.getBoxWidth()*i;
        }
    }

    //创建一行新的box
    public create():void {

        this._isHit = false;
        var touchIndex:number = Math.floor(Math.random()*4);
        var len:number = this._boxs.length;
        for(var i:number=0;i<len;i++) {
            if(i==touchIndex) {
                this._boxs[i].drawBox(true);
            } else {
                this._boxs[i].drawBox();
            }
        }
    }


    private _isHit:boolean = false; //本行是否被击中
    public get isHit():boolean  {
        return this._isHit;
    }

    /**
     * 点击正确
     */
    private clickRight(evt:GameEvent):void {
        if(!this._isHit) {
            this._isHit = true;
            var event:GameEvent = new GameEvent(GameEvent.GAME_HIT);
            this.dispatchEvent(event);
        }
    }

    /**
     * 点击错误
     * 游戏结束事件
     */
    private boxGameOver(evt:GameEvent):void {
        var event:GameEvent = new GameEvent(GameEvent.GAME_OVER);
        this.dispatchEvent(event);
    }

}
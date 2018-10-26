/**
 * 游戏开始时画布
 */
class StartGamePanel extends egret.Sprite {
    public constructor() {
        super();
        this.init();
    }

    // 游戏背景
    private _background:egret.Shape;

    // 游戏按钮
    private _startBtn:egret.TextField;

    /**
     * 初始化函数
     */
    private init() {
        // 设置背景
        this._background = new egret.Shape();
        this._background.graphics.beginFill(0);
        this._background.graphics.drawRect(0,0,GameData.getStageWidth(),GameData.getStageHeight());
        this._background.graphics.endFill();
        this.addChild( this._background );

        // 设置按钮
        this._startBtn = new egret.TextField();
        this._startBtn.text = "开始";
        this._startBtn.size = 50;
        this._startBtn.x = 180;
        this._startBtn.y = 200;
        this.addChild( this._startBtn );
        this._startBtn.touchEnabled = true;

        // 添加事件 
        this._startBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.click, this);
    }


    /**
     * 开始游戏
     * click
     */
    private click(evt:egret.TouchEvent):void {
        var event:GameEvent = new GameEvent(GameEvent.GAME_START);
        this.dispatchEvent(event);
    }
}
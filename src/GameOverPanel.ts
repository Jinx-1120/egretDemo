/**
 * GameOverPanel
 * 游戏结束时的画布
 */

class GameOverPanel extends egret.Sprite {
    public constructor() {
        super();
        this.init();
    }

    // 结束游戏时背景
    private _background:egret.Shape;

    // 显示得分
    private _score:egret.TextField;

    // 重新开始游戏按钮
    private _startGameBtn:egret.TextField;

    /**
     * init()
     * 初始化函数
     */
    private init():void {
        // 绘制背景
        this._background = new egret.Shape();
        this._background.graphics.beginFill(0);
        this._background.graphics.drawRect(0,0,GameData.getStageWidth(),GameData.getStageHeight());
        this._background.graphics.endFill();
        this.addChild( this._background );

        // 添加分数
        this._score = new egret.TextField();
        this._score.textColor = 0xffffff;
        this._score.text = "分数：" + GameData.getScore();
        this._score.size = 50;
        this._score.x = 150;
        this._score.y = 50;
        this.addChild( this._score );

        // 按钮
        this._startGameBtn = new egret.TextField();
        this._startGameBtn.text = "重玩";
        this._startGameBtn.size = 40;
        this._startGameBtn.textColor = 0xffffff;
        this._startGameBtn.x = 180;
        this._startGameBtn.y = 200;
        this.addChild( this._startGameBtn );
        this._startGameBtn.touchEnabled = true;
        // 添加重新开始游戏事件
        this._startGameBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.restartGame,this);

    }

    /**
     * update
     * 更新得分
     */
    public update() {
        this._score.text = "分数：" + GameData.getScore();
    }

    /**
     * restartGame
     * 重新开始游戏
     */
    private restartGame(evt:egret.TouchEvent) {
        var event:GameEvent = new GameEvent(GameEvent.GAME_START);
        this.dispatchEvent(event);
    }
}
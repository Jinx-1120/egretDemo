class GameOverPanel extends egret.Sprite
{
    public constructor()
    {
        super();
        this.init();
    }

    private _background:egret.Shape;
    private _score:egret.TextField;
    private _startGameBtn:egret.TextField;

    private init():void
    {
        this._background = new egret.Shape();
        this._background.graphics.beginFill(0);
        this._background.graphics.drawRect(0,0,GameData.getStageWidth(),GameData.getStageHeight());
        this._background.graphics.endFill();
        this.addChild( this._background );

        this._score = new egret.TextField();
        this._score.textColor = 0xffffff;
        this._score.text = "分数：" + GameData.getScore();
        this._score.size = 50;
        this._score.x = 150;
        this._score.y = 50;
        this.addChild( this._score );

        this._startGameBtn = new egret.TextField();
        this._startGameBtn.text = "重玩";
        this._startGameBtn.size = 40;
        this._startGameBtn.textColor = 0xffffff;
        this._startGameBtn.x = 180;
        this._startGameBtn.y = 200;
        this.addChild( this._startGameBtn );
        this._startGameBtn.touchEnabled = true;
        this._startGameBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.restartGame,this);

    }

    public update()
    {
        this._score.text = "分数：" + GameData.getScore();
    }

    private restartGame(evt:egret.TouchEvent)
    {
        var event:GameEvent = new GameEvent(GameEvent.GAME_START);
        this.dispatchEvent(event);
    }
}
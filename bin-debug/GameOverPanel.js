var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var GameOverPanel = (function (_super) {
    __extends(GameOverPanel, _super);
    function GameOverPanel() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    GameOverPanel.prototype.init = function () {
        this._background = new egret.Shape();
        this._background.graphics.beginFill(0);
        this._background.graphics.drawRect(0, 0, GameData.getStageWidth(), GameData.getStageHeight());
        this._background.graphics.endFill();
        this.addChild(this._background);
        this._score = new egret.TextField();
        this._score.textColor = 0xffffff;
        this._score.text = "分数：" + GameData.getScore();
        this._score.size = 50;
        this._score.x = 150;
        this._score.y = 50;
        this.addChild(this._score);
        this._startGameBtn = new egret.TextField();
        this._startGameBtn.text = "重玩";
        this._startGameBtn.size = 40;
        this._startGameBtn.textColor = 0xffffff;
        this._startGameBtn.x = 180;
        this._startGameBtn.y = 200;
        this.addChild(this._startGameBtn);
        this._startGameBtn.touchEnabled = true;
        this._startGameBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.restartGame, this);
    };
    GameOverPanel.prototype.update = function () {
        this._score.text = "分数：" + GameData.getScore();
    };
    GameOverPanel.prototype.restartGame = function (evt) {
        var event = new GameEvent(GameEvent.GAME_START);
        this.dispatchEvent(event);
    };
    return GameOverPanel;
}(egret.Sprite));
__reflect(GameOverPanel.prototype, "GameOverPanel");

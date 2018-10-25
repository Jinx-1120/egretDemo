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
var GameView = (function (_super) {
    __extends(GameView, _super);
    function GameView() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    GameView.prototype.init = function () {
        this._boxGroups = [];
        var len = GameData.row + 1;
        for (var i = 0; i < len; i++) {
            var boxg = new GroupRect();
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
    };
    GameView.prototype.startgame = function () {
        this.scoreText.text = String(0);
        var len = GameData.row + 1;
        for (var i = 0; i < len; i++) {
            this._boxGroups[i].create();
            this._boxGroups[i].y = 0 - GameData.getBoxHeight() * (1 + i); //GameData.getStageHeight()-GameData.getBoxHeight()*(1+i);
        }
    };
    //移动
    GameView.prototype.move = function () {
        var len = GameData.row + 1;
        for (var i = 0; i < len; i++) {
            this._boxGroups[i].y += GameData.speed;
        }
        for (i = 0; i < len; i++) {
            if (this._boxGroups[i].y >= GameData.getStageHeight()) {
                if (!this._boxGroups[i].isHit) {
                    this.gameOver();
                    return;
                }
                if (i == 0) {
                    this._boxGroups[i].y = this._boxGroups[4].y - GameData.getBoxHeight();
                }
                else {
                    this._boxGroups[i].y = this._boxGroups[i - 1].y - GameData.getBoxHeight();
                }
                this._boxGroups[i].create();
            }
        }
    };
    GameView.prototype.gameOver = function (evt) {
        if (evt === void 0) { evt = null; }
        var event = new GameEvent(GameEvent.GAME_OVER);
        this.dispatchEvent(event);
    };
    GameView.prototype.gamehit = function (evt) {
        GameData.setScore(GameData.getScore() + 1);
        this.scoreText.text = String(GameData.getScore());
    };
    return GameView;
}(egret.Sprite));
__reflect(GameView.prototype, "GameView");

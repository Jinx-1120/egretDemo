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
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        console.log('start');
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addStage, _this);
        return _this;
    }
    Main.prototype.addStage = function () {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.addStage, this);
        this.init();
    };
    Main.prototype.init = function () {
        this.gv = new GameView();
        this.addChild(this.gv);
        this.gv.addEventListener(GameEvent.GAME_OVER, this.gameover, this);
        this.timer = new egret.Timer(20, 0);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timers, this);
        this.gameoverPanel = new GameOverPanel();
        this.gameoverPanel.addEventListener(GameEvent.GAME_START, this.startgame, this);
        this.startgamePanel = new StartGamePanel();
        this.startgamePanel.addEventListener(GameEvent.GAME_START, this.startgame, this);
        this.addChild(this.startgamePanel);
    };
    Main.prototype.timers = function () {
        this.gv.move();
    };
    Main.prototype.gameover = function (evt) {
        this.timer.stop();
        this.gameoverPanel.update();
        this.addChild(this.gameoverPanel);
    };
    Main.prototype.startgame = function (evt) {
        GameData.speed = 10;
        GameData.setScore(0);
        this.gv.startgame();
        if (this.startgamePanel.parent) {
            this.removeChild(this.startgamePanel);
        }
        if (this.gameoverPanel.parent) {
            this.removeChild(this.gameoverPanel);
        }
        this.timer.start();
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");

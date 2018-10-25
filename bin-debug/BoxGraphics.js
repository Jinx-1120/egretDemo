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
var BoxGraphics = (function (_super) {
    __extends(BoxGraphics, _super);
    function BoxGraphics() {
        var _this = _super.call(this) || this;
        _this._canTouch = false;
        _this.init();
        return _this;
    }
    BoxGraphics.prototype.init = function () {
        this.touchEnabled = true;
        this.width = GameData.getBoxWidth();
        this.height = GameData.getBoxHeight();
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.click, this);
    };
    //绘制内容
    //参数表示当前方块是否可以备点击
    BoxGraphics.prototype.drawBox = function (canTouch) {
        if (canTouch === void 0) { canTouch = false; }
        this._canTouch = canTouch;
        this.graphics.clear();
        if (canTouch) {
            this.graphics.beginFill(0);
        }
        else {
            this.graphics.beginFill(0xffffff);
        }
        this.graphics.lineStyle(1, 0);
        this.graphics.drawRect(0, 0, GameData.getBoxWidth(), GameData.getBoxHeight());
        this.graphics.endFill();
    };
    //当前方块被点击后的响应事件
    BoxGraphics.prototype.click = function (evt) {
        this.graphics.clear();
        if (this._canTouch) {
            this.graphics.beginFill(0xcccccc);
        }
        else {
            this.graphics.beginFill(0xff0000);
        }
        this.graphics.lineStyle(1, 0);
        this.graphics.drawRect(0, 0, GameData.getBoxWidth(), GameData.getBoxHeight());
        this.graphics.endFill();
        var event;
        if (!this._canTouch) {
            event = new GameEvent(GameEvent.GAME_OVER);
        }
        else {
            event = new GameEvent(GameEvent.GAME_HIT);
        }
        this.dispatchEvent(event);
    };
    return BoxGraphics;
}(egret.Shape));
__reflect(BoxGraphics.prototype, "BoxGraphics");

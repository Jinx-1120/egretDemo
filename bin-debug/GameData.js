var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameData = (function () {
    function GameData() {
    }
    GameData.getScore = function () {
        return GameData.score;
    };
    GameData.setScore = function (val) {
        GameData.score = val;
        GameData.speed = 10 + GameData.score;
    };
    GameData.getBoxWidth = function () {
        if (GameData._boxWidth == 0) {
            GameData._boxWidth = egret.MainContext.instance.stage.stageWidth / GameData.column;
        }
        return GameData._boxWidth;
    };
    GameData.getBoxHeight = function () {
        if (GameData._boxHeight == 0) {
            GameData._boxHeight = egret.MainContext.instance.stage.stageHeight / GameData.row;
        }
        return GameData._boxHeight;
    };
    GameData.getStageHeight = function () {
        return egret.MainContext.instance.stage.stageHeight;
    };
    GameData.getStageWidth = function () {
        return egret.MainContext.instance.stage.stageWidth;
    };
    GameData.score = 0; //分数
    GameData.row = 4; //行数
    GameData.column = 4; //列数
    GameData.speed = 10; //移动速度
    GameData._boxWidth = 0; //盒子宽度
    GameData._boxHeight = 0; //盒子高度
    return GameData;
}());
__reflect(GameData.prototype, "GameData");

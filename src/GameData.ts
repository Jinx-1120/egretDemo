class GameData {
    private static score:number = 0; //分数
    public static row:number = 4;   //行数
    public static column:number = 4; //列数
    public static speed:number = 10; //移动速度

    private static _boxWidth:number = 0;   //盒子宽度
    private static _boxHeight:number = 0;  //盒子高度

    /**
     * getScore
     * 获取分数
     */
    public static getScore():number {
        return GameData.score;
    }

    /**
     * setScore
     * 设置分数
     */
    public static setScore(val:number) {
        GameData.score = val;
        GameData.speed = 10+GameData.score;
    }

    /**
     * getBoxWidth
     * 获取格子宽度
     */
    public static getBoxWidth():number {
        if( GameData._boxWidth == 0) {
            GameData._boxWidth = egret.MainContext.instance.stage.stageWidth / GameData.column;
        }
        return GameData._boxWidth;
    }

    /**
     * getBoxHeight
     * 获取格子高度
     */
    public static getBoxHeight():number {
        if( GameData._boxHeight == 0) {
            GameData._boxHeight = egret.MainContext.instance.stage.stageHeight / GameData.row;
        }
        return GameData._boxHeight;
    }

    /**
     * getStageHeight
     * 获取当前屏幕高度
     */
    public static getStageHeight():number {
        return egret.MainContext.instance.stage.stageHeight;
    }

    /**
     * getStageWidth
     * 获取当前屏幕宽度
     */
    public static getStageWidth():number {
        return egret.MainContext.instance.stage.stageWidth;
    }

}
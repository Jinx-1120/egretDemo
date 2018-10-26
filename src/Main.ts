/**
 * 游戏主入口文件
 */
class Main extends egret.DisplayObjectContainer {

    public constructor() {
        super();
        console.log('start');
        // 添加初始化事件
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addStage, this);
    }
    // 移除事件 并初始化游戏
    private addStage() {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.addStage, this);
        this.init()
    }

    /**
     * 游戏参数
     * gameview 画布
     * timer 定时器
     * gameoverPanel 游戏结束画布
     * startgamePanel 开始游戏画布
     */
    private gameview:GameView ;
    private timer:egret.Timer;
    private gameoverPanel:GameOverPanel;
    private startgamePanel:StartGamePanel;

    /**
     * 初始化游戏函数
     * 初始化gameview
     * 初始化定时器
     * 初始化开始|结束 画布
     * 添加事件监听
     */
    private init():void {
        this.gameview = new GameView();
        this.addChild(this.gameview);
        this.gameview.addEventListener(GameEvent.GAME_OVER, this.gameover,this);
        this.timer = new egret.Timer(20,0);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timers, this);

        this.gameoverPanel = new GameOverPanel();
        this.gameoverPanel.addEventListener(GameEvent.GAME_START,this.startgame,this);

        this.startgamePanel = new StartGamePanel();
        this.startgamePanel.addEventListener(GameEvent.GAME_START, this.startgame, this);
        this.addChild(this.startgamePanel);
    }

    /**
     * 自动移动
     */
    private timers() {
        this.gameview.move();
    }

    /**
     * 游戏结束
     */
    private gameover(evt:GameEvent):void {
        this.timer.stop();
        this.gameoverPanel.update();
        this.addChild(this.gameoverPanel);
    }

    /**
     * 开始游戏
     * 重新设置游戏速度 分数
     * 去除游戏开始|结束画布
     */
    private startgame(evt:GameEvent):void {
        GameData.speed = 10;
        GameData.setScore(0);
        this.gameview.startgame();
        if(this.startgamePanel.parent) {
            this.removeChild(this.startgamePanel);
        }
        if(this.gameoverPanel.parent) {
            this.removeChild(this.gameoverPanel);
        }
        this.timer.start();
    }
}
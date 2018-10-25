class Main extends egret.DisplayObjectContainer {

    public constructor() {
        super();
        console.log('start');
        
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addStage, this);
    }
    private addStage() {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.addStage, this);
        this.init()
    }

    private gv:GameView ;
    private timer:egret.Timer;
    private gameoverPanel:GameOverPanel;
    private startgamePanel:StartGamePanel;

    private init():void
    {
        this.gv = new GameView();
        this.addChild(this.gv);
        this.gv.addEventListener(GameEvent.GAME_OVER, this.gameover,this);
        this.timer = new egret.Timer(20,0);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timers, this);

        this.gameoverPanel = new GameOverPanel();
        this.gameoverPanel.addEventListener(GameEvent.GAME_START,this.startgame,this);

        this.startgamePanel = new StartGamePanel();
        this.startgamePanel.addEventListener(GameEvent.GAME_START, this.startgame, this);
        this.addChild(this.startgamePanel);
    }

    private timers()
    {
        this.gv.move();
    }

    private gameover(evt:GameEvent):void
    {
        this.timer.stop();
        this.gameoverPanel.update();
        this.addChild(this.gameoverPanel);
    }

    private startgame(evt:GameEvent):void
    {
        GameData.speed = 10;
        GameData.setScore(0);
        this.gv.startgame();
        if(this.startgamePanel.parent)
        {
            this.removeChild(this.startgamePanel);
        }
        if(this.gameoverPanel.parent)
        {
            this.removeChild(this.gameoverPanel);
        }
        this.timer.start();
    }
    // public constructor() {
    //     super();
    //     console.log('start');
        
    //     let group:GroupRect = new GroupRect();
    //     this.addChild(group);
    //     group.createBlackRect();
    //     // group.addEventListener('gameover', this.gameover, this);
    //     // group.addEventListener('clickRight', this.clickRight, this);
    // }

    // private gameover() {
    //     console.log('gameover');

    // }

    // private clickRight() {
    //     console.log('clickRight');
    // }
    
}
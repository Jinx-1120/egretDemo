/**
 * GameEvent
 * 游戏事件
 */

class GameEvent extends egret.Event {

    // 游戏结束
    public static GAME_OVER:string = "game_over_event";
    // 下一步（点击正确）
    public static GAME_HIT:string = "game_hit_event";
    // 开始游戏
    public static GAME_START:string = "game_start_event";

    public constructor(type:string, bubbles:boolean = false, cancelable:boolean = false) {
        super(type,bubbles,cancelable);
    }


}
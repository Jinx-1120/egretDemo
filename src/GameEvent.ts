class GameEvent extends egret.Event
{
    public static GAME_OVER:string = "game_over_event";
    public static GAME_HIT:string = "game_hit_event";
    public static GAME_START:string = "game_start_event";

    public constructor(type:string, bubbles:boolean = false, cancelable:boolean = false)
    {
        super(type,bubbles,cancelable);
    }


}
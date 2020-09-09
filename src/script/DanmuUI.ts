import danmuSystemUI = ui.test.danmuSystemUI;
import { ui } from "./../ui/layaMaxUI";
import Configuration from "../Configuration";
export default class DanmuUI extends danmuSystemUI {
    private Dates:Array<any>;
    private isDanmuTime:boolean=false;
    private delayTime:number=15000;
    private allWeight:number=0;
    public limitDanmuNum:number=10; 
    public curenceDanmuNum:number=0;
    public limitTimeMax:number=10;
    public limitTimeMin:number=4;
    static instance: DanmuUI;
    constructor(){
        super();
        DanmuUI.instance = this;
    }

    init(){
        Laya.timer.clearAll(this);
        this.allWeight=0;
        this.Dates=Configuration.Xmlarray;
        for(var i=0;i<this.Dates.length;i++){
            this.allWeight+=this.Dates[i].weight;
        }
        
        this.isDanmuTime=true;
        this.generalDanmu();
        var delayTime:number;
        delayTime=Math.random()*this.delayTime;
        Laya.timer.once(delayTime,this,this.generalDanmu);
    }

    generalDanmu(){
        if(this.isDanmuTime==true&&this.Dates.length>0){
            var delayTime:number;
            delayTime=Math.random()*this.delayTime;
            Laya.timer.once(delayTime,this,this.generalDanmu);
            var point:number=Math.random()*this.allWeight;
            var realValue:string;
            if(this.Dates.length>0){
                realValue=this.Dates[this.Dates.length-1].text;
            }
            else{
                return;
            }
            for(var i=0;i<this.Dates.length;i++){
                if(point<=this.Dates[i].weight){
                    realValue=this.Dates[i].text;
                    break;
                }
                else
                    point-=this.Dates[i].weight;
            }

            if(this.curenceDanmuNum<this.limitDanmuNum){
                var danmu: Laya.Label = Laya.Pool.getItemByClass("danmu", Laya.Label);
                danmu.fontSize=Math.floor(Math.random() * (100 - 30) + 30);
                danmu.x = 1600;
                danmu.y =Math.floor(Math.random() * 797);
                danmu.text=realValue;
                danmu.color="#ff0400"
                this.addChild(danmu);
                var duration:number=Math.floor(Math.random() * (10 - 4) + 4);
                Laya.Tween.to(danmu,{x:-342},duration*1000,null,Laya.Handler.create(this,this.destoryDanmu,[danmu]));
                this.curenceDanmuNum ++;
            }
        }
    }

    destoryDanmu(obj){
        this.curenceDanmuNum --;
        this.removeChild(obj);
       Laya.Pool.recover("danmu",obj);
    }
}

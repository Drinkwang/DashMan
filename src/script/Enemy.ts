import GameUI from "./GameUI";
import AniName from "./aniName";
import BezierPath from "./utils/BezierPath";
import ShakeCamera from "./ShakeCamera";
import Configuration from "../Configuration";
import AudioPlayUtils from "./utils/AudioPlayUtils";
import LocalStore from "./utils/LocalStore";
import GameControl from "./GameControl";

/**
 * 敌人(障碍物)脚本，玩家需要消灭所有敌人
 */


export default class Enemy extends Laya.Script {
    constructor() { super(); }
    private level: number;

    /** @prop {name:tid,tips:"id",type:int,default:0}*/
    tid: number = 0;

    /** @prop {name:xPos,tips:"坐标x",type:float,default:0}*/
    xPos: number = 0;


    /** @prop {name:yPos,tips:"坐标y",type:float,default:0}*/
    yPos: number = 0;
    /** @prop {name:type,tips:"障碍物类型，0是地板不可碰撞，默认1为活物，也就是敌人会进行计分，多余类别（策划）往后加",type:int,default:0}*/
    type: number = 0;
    /** @prop {name:forceSize,tip:"阻碍系数",type:int,default:0.35}*/
    forceSize: number = 0.35;
    /** @prop {name:c,tip:"障碍物力度值，力度X阻碍系数，正值为加速，负值为减速",type:int,default:30}*/
    c: number = 0;
   
    /** @prop {name:shakeTime,tip:"晃动屏幕影响",type:int,default:0.02}*/
    shakeTime: number = 0.02;
    /** @prop {name:aniSpeedImpact,tip:"晃动屏幕影响力度",type:int,default:10}*/
    aniSpeedImpact: number = 10;

    /** @prop {name:idleAni,tip:"停留动画,如果没有则为程序生成动画",type:string,default:null}*/
    idleAni: string;
    /** @prop {name:beHitAni,tip:"被撞击动画,如果没有则为程序生成动画",type:string,default:null}*/
    beHitAni: string ;
    /** @prop {name:beHitAudio,tip:"被撞击的声音,如果没有则为不播放",type:string,default:null}*/
    beHitAudio: string;
    /** @prop {name:name,tip:"name",type:string,default:null}*/
    name: string

    isbeHit: boolean = false;
    isfirstC: boolean;
    onEnable(): void {
        //设置初始速度
        this.isfirstC = false;
        if (this.idleAni != null) {
            if (this.idleAni.lastIndexOf(".") != -1) {
                var sprite: Laya.Sprite = this.owner.getChildByName("sprite") as Laya.Sprite;
                sprite.loadImage("battle/" + this.idleAni);
            }
            else {
                var ani: Laya.Animation = this.owner.getChildByName("ani") as Laya.Animation;
                ani.interval = 100;
                ani.play(0, true, this.idleAni);
            }
        }
        if (this.isbeHit == true) {
            GameUI.instance.enemyNum++;

        }


    }

    onTriggerEnter(other: any, self: any, contact: any): void {
 //      GameUI.instance.onShakeCamera(this.shakeTime, this.aniSpeedImpact);


        if (this.type != 0&&GameUI.instance.canTrigger==true) {
            GameUI.instance.onSubSpeed(this.c, this.forceSize);
            var owner: Laya.Sprite = this.owner as Laya.Sprite;
            
            if (other.label === "player") {
                if (this.tid == 103) {
                    var roleAni: Laya.Animation = GameUI.instance.player.getChildByName("ani") as Laya.Animation;
                    roleAni.play(0, false, AniName.hurt);
                    roleAni.on(Laya.Event.COMPLETE, this, this.hurtEnd);
                    AudioPlayUtils.playAudio("sound/woa.wav");
                }
                if (this.isbeHit == true) {
                    GameUI.instance.addScore(1);
                }
                if (this.isfirstC == false) {           
                    this.isfirstC = true;
                    var ani: Laya.Animation = owner.getChildByName("ani") as Laya.Animation;
                    var sprite: Laya.Sprite = owner.getChildByName("sprite") as Laya.Sprite;
                    if (this.beHitAudio != null) {
                        if (Configuration.audioPlay == true)
                            AudioPlayUtils.playAudio("sound/" + this.beHitAudio + ".wav");
                    }
                    if (this.idleAni == "bulletin") {

                        sprite.destroy();

                        if (ani != null) {
                            ani = new Laya.Animation();
                            this.owner.addChild(ani);
                            ani.loadAtlas((this.beHitAni), Laya.Handler.create(this, this.onLoaded, [ani]));
                        }
                    }
                    else if (this.beHitAni == "null" && this.type == 1) {
                        Laya.Tween.to(sprite, { x: (sprite.x + 600), y: (sprite.y - 500), scaleX: 0.3, scaleY: 0.3, rotation: 90, complete: Laya.Handler.create(this, this.onde) }, 500);
                        if(this.tid==106){
                            this.onGetCoin(0,5)

                        }                 
                    }
                    else if (this.type == 2 && this.beHitAni.length > 2) {
          
                        let points = [];
                        console.log("x" + ani.x + "," + "y" + ani.y);
                        let point1 = new Laya.Point(sprite.x, sprite.y);
                        let point2 = new Laya.Point(sprite.x + 600, sprite.y - 500);
                        let point3 = new Laya.Point(sprite.x + 600, sprite.y - 200);
                        points.push(point1);
                        points.push(point2);
                        points.push(point3)
                        let array = BezierPath.CreateBezierPoints(points, 60);
                        console.log(array);
                        if (this.beHitAni == AniName.fat_die.substr(6, 100)) {
                            AudioPlayUtils.playAudio("sound/pangzi.wav");
                            Configuration.hitFatNum++;
                            LocalStore.SaveValue(LocalStore.hitFatNum,(String)(Configuration.hitFatNum));
                        } else if (this.beHitAni == AniName.slim_die.substr(6, 100)) {
                            AudioPlayUtils.playAudio("sound/slim.wav");
                            Configuration.hitSlimNum++;
                            LocalStore.SaveValue(LocalStore.hitSlimNum,(String)(Configuration.hitSlimNum));
                        } else if (this.beHitAni == AniName.Lady_die.substr(6, 100)) {
                            AudioPlayUtils.playAudio("sound/godDead.wav");
                            this.onGameOver();

                        }
                        let index = 0
                        //Laya.timer.loop()
                        Laya.timer.frameLoop(1, this, function () {
                            if (index > array.length - 1) {
                                index = 0;
                                Laya.timer.clearAll(this);
                                return;
                            }
                            ani.pos(array[index].x, array[index].y)
                            index++
                        })

                        ani.play(0, false, this.beHitAni);

                        if(this.tid==203){
                            //广告牌
                            this.onGetCoin(5,10)
                        }
                        else if(this.tid==205){

                            //汽车
                            this.onGetCoin(20,30);


                        }else if(this.tid==206){

                            //油桶
                            this.onGetCoin(10,20);

                        }
                    } else {


                    }
                }
            }
        }
    }
    hurtEnd() {
        var roleAni: Laya.Animation = GameUI.instance.player.getChildByName("ani") as Laya.Animation;
        roleAni.play(0, true, AniName.dash);
        roleAni.off(Laya.Event.COMPLETE, this, this.hurtEnd);

    }
    onde() {
        this.owner.destroy();

    }
    onGameOver() {
        GameUI.instance.Gameover();
    

    }
    onLoaded(t: Laya.Animation): void {
        t.play(0, false);
    }


    onUpdate(): void {

    }

    onGetCoin(minNum:number,MaxNum:number):void{
        var canGetCoin:number=Math.floor(Math.random() * (MaxNum - minNum) + minNum);
        var days:Date=new Date();
        if(LocalStore.loadValue(LocalStore.hitGetCoinTime)==null||(Number(LocalStore.loadValue(LocalStore.hitGetCoinTime)+Configuration.C_DAY)>=days.getTime())){
            LocalStore.SaveValue(LocalStore.hitGetCoinTime,String(days.getTime()));
            Configuration.hitGetCoin=0;
            LocalStore.SaveValue(LocalStore.hitGetCoin,String(Configuration.hitGetCoin));
        }
          
        
        if(Configuration.hitGetCoin+canGetCoin<=100){
            Configuration.hitGetCoin+=canGetCoin;
            Configuration.holdGoldNum+=canGetCoin;
            GameUI.instance.goldGetText.text="你获得"+canGetCoin+"枚金币";
            AudioPlayUtils.playAudio("sound/coin.mp3");
            LocalStore.SaveValue(LocalStore.holdMoney,(String)(Configuration.holdGoldNum));
            LocalStore.SaveValue(LocalStore.hitGetCoin,String(Configuration.hitGetCoin));

            Laya.Tween.to(GameUI.instance.goldPanel,{y:850,ease:Laya.Ease.backOut},300,function(){
                Laya.timer.once(3000,this,function(){
                    Laya.Tween.to(GameUI.instance.goldPanel,{y:900,ease:Laya.Ease.backOut},300);

                })
                
            });
        }
        else if(Configuration.hitGetCoin<100){
            canGetCoin=100-Configuration.hitGetCoin;
            Configuration.hitGetCoin=100;
            Configuration.holdGoldNum+=canGetCoin;
            GameUI.instance.goldGetText.text="你获得"+canGetCoin+"枚金币";
            AudioPlayUtils.playAudio("sound/coin.mp3");
            LocalStore.SaveValue(LocalStore.holdMoney,(String)(Configuration.holdGoldNum));
            LocalStore.SaveValue(LocalStore.hitGetCoin,String(Configuration.hitGetCoin));
            Laya.Tween.to(GameUI.instance.goldPanel,{y:850,ease:Laya.Ease.backOut},300,function(){
                Laya.timer.once(3000,this,function(){
                    Laya.Tween.to(GameUI.instance.goldPanel,{y:900,ease:Laya.Ease.backOut},300);

                })
                
            });
        }
        else{
            //你的金额已满
            GameUI.instance.goldGetText.text="你当日可领取的金额已满";
            Laya.Tween.to(GameUI.instance.goldPanel,{y:850,ease:Laya.Ease.backOut},300,function(){
                Laya.timer.once(3000,this,function(){
                    Laya.Tween.to(GameUI.instance.goldPanel,{y:900,ease:Laya.Ease.backOut},300);

                })
                
            });
        }
     

    }

    onDisable(): void {
        //子弹被移除时，回收子弹到对象池，方便下次复用，减少对象创建开销
        Laya.Pool.recover("bullet", this.owner);
    }
}
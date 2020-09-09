
import Bullet from "./Bullet";
import GameUI from "./GameUI";
import RigidBody = Laya.RigidBody;
import AniName from "./aniName";
import Enemy from "./Enemy";
import AudioPlayUtils from "./utils/AudioPlayUtils";
import Configuration from "../Configuration";

/**
 * 游戏控制脚本。定义了几个dropBox，bullet，createBoxInterval等变量，能够在IDE显示及设置该变量
 * 更多类型定义，请参考官方文档
 */
export default class GameControl extends Laya.Script {
    /** @prop {name:enemy,tips:"敌人预物体",type:Prefab}*/
    enemy: Laya.Prefab;
    /** @prop {name:rountClickTime,tips:"间隔多少毫秒内可以点击",type:int,default:1000}*/
    rountClickTime: number = 1000;
    /** @prop {name:forceSize,tip:"力度大小",type:int,default:1000}*/
    forceSize: number = 10;
    /** @prop {name:aniInterVal,tip:"播放动画的速度",type:int,default:30}*/
    aniInterVal: number = 30;
    /** @prop {name:mouseMoveSpeed,tip:"鼠标移动的速度",type:int,default:30}*/
    mouseMoveSpeed: number = 30;


    /** @prop {name:intervalTime,tip:"力度/按压间隔时间",type:int,default:15000}*/
    intervalTime: number = 15000;
    /** @prop {name:manMaxSpeed,tip:"男人最大的速度",type:int,default:10}*/
    manMaxSpeed: number = 10;

    /** @prop {name:manMinSpeed,tip:"男人最小的速度",type:int,default:70}*/
    manMinSpeed: number = 70;

    /**持续点击记录的时间*/
    private allTime: number = 0;
    private _time: number = 0;
    /**是否已经开始游戏 */
    /**子弹和盒子所在的容器对象 */

    private _gameBox: Laya.Sprite;
    //public clicktime: number;
    private isFirstClick: boolean;
    private isClickOver: boolean;
    private isRountOver: boolean;
    private isStart: boolean;
    private isPlay2: boolean;
    public bgSpriteList: Array<Laya.Sprite>;
    public sky: Laya.Sprite;
    public player: Laya.Sprite; 
    public groud: Laya.Sprite;
    public boardLength: number=0;
    public cDistance: number=0;
    private isRealseSkill:boolean=false;
    private canRealseSkill:boolean=false;
    private secondClick:boolean=false;
    constructor() { super(); }

    onEnable(): void {
       
        this._gameBox = this.owner.getChildByName("gameBox") as Laya.Sprite;

       
    }


    onUpdate(): void {

        //每间隔判断有没有进行点击
        var now = Date.now();
        if (now - this._time > this.rountClickTime && this.isFirstClick==false) {
            this.clickOver();

        }

        var ctrlBool = Laya.KeyBoardManager.hasKeyDown(Laya.Keyboard.CONTROL);
        var altBool = Laya.KeyBoardManager.hasKeyDown(Laya.Keyboard.ALTERNATE);
        var dBool = Laya.KeyBoardManager.hasKeyDown(Laya.Keyboard.ALTERNATE);
        if(Laya.KeyBoardManager.hasKeyDown(Laya.Keyboard.F2)){
                Laya.Scene.load(Configuration.InitScene,Laya.Handler.create(this,this.onReturnHome));
        
            
        }

        if (ctrlBool == true && altBool == true && dBool== true) {
            Laya.enableDebugPanel();
            console.log("调试模式已经打开");

        }


    }
    onReturnHome(){
        Laya.Scene.open(Configuration.InitScene,true);
    }

    createBox(): void {
        //使用对象池创建盒子
  
    }

    onStageClick(e: Laya.Event): void {
        var roleAni: Laya.Animation = GameUI.instance.player.getChildByName("ani") as Laya.Animation;
        var groud: Laya.Sprite = GameUI.instance.group;

        if (this.isStart == true) {
            if(this.isRealseSkill == false&&Configuration.currenSelectSkill!=0&&this.canRealseSkill==true){
                this.onRealseSkill();
            }
            if (this.isClickOver == false&& Math.abs(this.player.x) < 330&&this.secondClick==false){
                this.secondClick=true;
                Laya.timer.once(2000,this,function(this){
                    this.secondClick=false;
                },[this])
                
            }
            else if (this.isClickOver == false && Math.abs(this.player.x) < 330&&this.secondClick==true) {
                if (this.isFirstClick == true) {
                    this._time = Date.now();
                    this.allTime = Date.now();
                    this.isFirstClick = false;
                    console.log("第一次点击");
                    GameUI.instance.playerOutLint.visible=false;
                    AudioPlayUtils.playAudio("sound/xuli.wav");
                    this.onOriginPoint();
                    GameUI.instance.leftArrow.stop();
                    GameUI.instance.rightArrow.stop();
                    GameUI.instance.leftArrow.visible=false;
                    GameUI.instance.rightArrow.visible=false;
                    roleAni.stop();
                    roleAni.play(0, false, AniName.chargingA);
                }
                else {
                    let now = Date.now();
                    e.stopPropagation();
                    if (now - this._time < this.rountClickTime) {
                 //       this.clicktime++;
                        this._time = now;
                      
                    }
                }
                GameUI.instance.progress.value += (0.1 * (Math.random()*3));
                if (GameUI.instance.progress.value >= 0.7) {
                    if (this.isPlay2 == false) {
                        roleAni.play(0, false, AniName.chargingB);
                        this.isPlay2 = true;
                    }
                }
                Laya.timer.once(100, this, function (): void {
                    GameUI.instance.progress.value -= 0.03*(Math.random() * 5);

                });
            }
        }
    }

    clickOver(): void {
        if (this.isClickOver == false && this.isRountOver == false) {
            this.isClickOver = true;
            console.log("charge Complete");
            var player: Laya.Sprite = GameUI.instance.player;
            var rig: RigidBody = player.getComponent(RigidBody);
            var roleAni: Laya.Animation = player.getChildByName("ani") as Laya.Animation;
            roleAni.stop();
            var now = Date.now();
            var force = (now - this.allTime);
            this.cDistance = (GameUI.instance.progress.value + force / (100 * 1000) + Math.random() * 0.15 - Math.random() * 0.15) * this.boardLength;      
         
         
            if(Configuration.isCreazyMode)
                this.run();
            else
                roleAni.interval = 100/(GameUI.instance.progress.value + force / (100 * 1000));

            roleAni.play(0, true, AniName.dash);

            
       
            //   console.log(this.clicktime);
            Laya.Tween.to(player, { x: 600 }, (500 + 5000 / (force / 200)));
            Laya.timer.once(100,this,this.onCanRelaseSkill);
            Laya.timer.once(500,this,this.onPlayerMoveComplete);
            rig.setVelocity({ x: 0.01, y:0});
           // rig.applyForceToCenter({ x: 559  * this.forceSize + 30*force, y: 0 });
        }
       // rig.applyForceToCenter({ x: 559+(0.1 * this.clicktime * this.forceSize), y: 76+(0.1 * this.clicktime * this.forceSize) });
    }

    onCanRelaseSkill():void{
        this.canRealseSkill=true;

    }
    onPlayerMoveComplete(): void {
        console.log("猛男冲击完成")
        Laya.timer.loop(100, this, this.onPlayerMove2)

    }

    onPlayerMove2(): void {
        var rig: RigidBody = this.player.getComponent(RigidBody);
        var roleAni: Laya.Animation = this.player.getChildByName("ani") as Laya.Animation;
        rig.setVelocity({ x: 0.01, y: 0 });
        if (Math.abs(this.groud.x - this.player.x) >= this.cDistance + 5) {
            Laya.timer.clear(this, this.onPlayerMove2);
            roleAni.stop();
            this.isRountOver = true;
            roleAni.play(0, true, AniName.idle);
            this.isRountOver = true;
            this.canRealseSkill=false;
            GameUI.instance.Determineoutcome();
        }
        var rate = Math.abs(this.groud.x - this.player.x) / Math.abs(this.cDistance + 5) * this.cDistance / this.boardLength;
        GameUI.instance.progress.value = (this.cDistance / this.boardLength)-rate;
        if (Math.abs(this.groud.x - this.player.x) >= 6798) {
            console.log("男人掉下悬崖,gg")
            Laya.timer.clear(this, this.onPlayerMove2);
            GameUI.instance.Gameover();
            roleAni.stop();
            roleAni.interval = 100;
            AudioPlayUtils.playAudio("sound/aaaa.wav");
            Laya.SoundManager.stopMusic();
            roleAni.play(0, false, AniName.fall);
            roleAni.on(Laya.Event.COMPLETE,this,function(){        
                var roleAni: Laya.Animation = this.player.getChildByName("ani") as Laya.Animation;
                roleAni.visible=false;
                roleAni.offAll();
            });

        }
        this.bgSpriteList.forEach(function (e) {

            console.log(roleAni.interval);
            e.x -=(10+ 3000/roleAni.interval);
        });
        this.sky.x -= 1;
        GameUI.instance.grass.x -= 5;
        //-6798


    }
    /**开始游戏，通过激活本脚本方式开始游戏*/
    startGame(): void {
        if (!this.isStart) {
            Laya.timer.once(200,this,this.onStartGame);

        }
        GameUI.instance.rightArrow.visible=true;
        GameUI.instance.leftArrow.play(0,true);
        GameUI.instance.rightArrow.play(0,true);
    }
    
    onMouseMove(e: Laya.Event) {
        if (this.isStart == true && this.isFirstClick == true) {

            var groud: Laya.Sprite = GameUI.instance.group as Laya.Sprite;
            var player: Laya.Sprite = GameUI.instance.player;
            var widthStart: number = 750;
            var widthEnd: number = 850;

          //  var HeightStart: number = 450;


            var timeDelata: number = (Laya.timer.delta / 1000) * this.mouseMoveSpeed;
            if (e.stageX > widthEnd) {
                if (groud.x - (e.stageX - widthEnd) * timeDelata >= -6000) {
                   // bg.x = bg.x - (e.stageX - widthEnd) * timeDelata;
                    GameUI.instance.grass.x = GameUI.instance.grass.x - (e.stageX - widthEnd) * timeDelata;
                    player.x = player.x - (e.stageX - widthEnd) * timeDelata;
                    this.bgSpriteList.forEach(function (w) {
                        w.x = w.x - (e.stageX - widthEnd) * timeDelata;

                    })
                    GameUI.instance.leftArrow.visible=true;
                    GameUI.instance.rightArrow.visible=true;
                    if(GameUI.instance.leftArrow.isPlaying==false){

                        GameUI.instance.leftArrow.play(0,true);
                    }
                    if(GameUI.instance.rightArrow.isPlaying==false){

                        GameUI.instance.rightArrow.play(0,true);
                    }
                }
                else {
                    //bg.x = -6000;
                    GameUI.instance.leftArrow.visible=true;
                    GameUI.instance.rightArrow.visible=false;
                    if(GameUI.instance.leftArrow.isPlaying==false){

                        GameUI.instance.leftArrow.play(0,true);
                    }
                    player.x = - 6000;
                    var grassen: Enemy = GameUI.instance.grass.getComponent(Enemy);
                    GameUI.instance.grass.x = grassen.xPos-6000; 
                    this.bgSpriteList.forEach(function (w) {
                        var en: Enemy = w.getComponent(Enemy);
                        if(en!=null){
                            w.x = en.xPos - 6000;
                        }

                    });
                    groud.x=-6010;

                }
            }

            else if (e.stageX < widthStart) {
                console.log(groud.x);
                if (groud.x + Math.abs(e.stageX - widthStart) * timeDelata <= -10) {
                    GameUI.instance.grass.x = GameUI.instance.grass.x + Math.abs(e.stageX - widthStart) * timeDelata;
                    player.x = player.x + Math.abs(e.stageX - widthStart) * timeDelata;
                    this.bgSpriteList.forEach(function (w) {
                        w.x = w.x + Math.abs(Math.abs(e.stageX - widthStart) * timeDelata);
                      
                    })
                    GameUI.instance.leftArrow.visible=true;
                    GameUI.instance.rightArrow.visible=true;
                    if(GameUI.instance.leftArrow.isPlaying==false){

                        GameUI.instance.leftArrow.play(0,true);
                    }
                    if(GameUI.instance.rightArrow.isPlaying==false){

                        GameUI.instance.rightArrow.play(0,true);
                    }
                }
                else if (groud.x + Math.abs(e.stageX - widthStart) * timeDelata > -10) {
                    GameUI.instance.rightArrow.visible=true;
                    GameUI.instance.leftArrow.visible=false;
                    this.onOriginPoint();
                }
            }
            if (e.stageY < 225) {
            }
            else if (e.stageY > 675) {


            }

        }
    }

    onOriginPoint(){
        var player: Laya.Sprite = GameUI.instance.player;

        if(GameUI.instance.rightArrow.isPlaying==false){

            GameUI.instance.rightArrow.play(0,true);
        }
      //  bg.x = 0;
        player.x = -5;
        player.y = 265.3000000000003;
        
        var grassen: Enemy = GameUI.instance.grass.getComponent(Enemy);
        GameUI.instance.grass.x = -339;
        this.bgSpriteList.forEach(function (w) {
            var en: Enemy = w.getComponent(Enemy);
            if(en!=null){
                w.x = en.xPos;
                w.y = en.yPos;
            }
        })
        this.groud.x=-10;


    }

    onRealseSkill(){
        if(this.isRealseSkill==false){
            switch(Configuration.currenSelectSkill){
            case 1://run
            this.run();
            break;
            case 2://jump
            this.jump();
            break;
            case 3://roll
            this.roll();
            break;
       

            }
      //  this.run();
        this.isRealseSkill = true;
        GameUI.instance.ball.visible=false;
        }
    }

    run(){
        var roleAni: Laya.Animation = this.player.getChildByName("ani") as Laya.Animation;
        roleAni.interval = 50;
        this.cDistance+=1000;
    }

    jump(){
        var roleAni: Laya.Animation = this.player.getChildByName("ani") as Laya.Animation;
        GameUI.instance.canTrigger=false;
        Laya.Tween.to(this.player, { y: 0 }, (300),null,Laya.Handler.create(this,this.jumpEnd));
    }

    jumpEnd() {
        Laya.Tween.to(this.player, { y: 201 }, (300),null);
        GameUI.instance.canTrigger=true;
    }
    roll(){
        GameUI.instance.canTrigger=false;
        var roleAni: Laya.Animation = this.player.getChildByName("ani") as Laya.Animation;
        roleAni.stop();
        roleAni.interval = 80;
        this.cDistance+=500;
        roleAni.play(0, true, AniName.roll);
        roleAni.on(Laya.Event.COMPLETE, this, this.rollEnd);

    }

    rollEnd() {
        var roleAni: Laya.Animation = GameUI.instance.player.getChildByName("ani") as Laya.Animation;
        var now = Date.now();
        var force = (now - this.allTime);
        roleAni.interval = 100/(GameUI.instance.progress.value + force / (100 * 1000));
        roleAni.play(0, true, AniName.dash);
        roleAni.off(Laya.Event.COMPLETE, this, this.rollEnd);
        GameUI.instance.canTrigger=true;
    }
    onStartGame() {
        GameUI.instance.playerOutLint.visible=true;
        Laya.timer.once(200, this, this.onRealStartGame);
        //this.clicktime = 0;
   

    }

    onRealStartGame() {
       
      
        this.isPlay2 = false;
        this.isStart = true;
        this.enabled = true;
        this.isClickOver = false;
        this.isFirstClick = true;
        this.isRountOver = false;
        GameUI.instance.canTrigger=true;
        this.sky = GameUI.instance.sky;
        this.groud = GameUI.instance.group;
        this.player = GameUI.instance.player;
     
        this.isRealseSkill=false;
        this.canRealseSkill=false;
        GameUI.instance.score.text=("敌人：" + GameUI.instance._score + "/" + GameUI.instance.enemyNum);
        //this.clicktime = 0;
        


    }
    /**结束游戏，通过非激活本脚本停止游戏 */
    stopGame(): void {
        Laya.timer.clearAll(this);
        this.isStart = false;
        var player: Laya.Sprite = GameUI.instance.player;
        var rig: RigidBody = player.getComponent(RigidBody);
        var roleAni: Laya.Animation = player.getChildByName("ani") as Laya.Animation;
        roleAni.stop();
        roleAni.play(0,true,AniName.idle);

    }
}
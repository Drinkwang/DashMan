/// <reference path="../../typings/index.d.ts" />
import { ui } from "./../ui/layaMaxUI";
import main = ui.test.MainUiUI;
import Handle = Laya.Handler;
import GameConfig from "../GameConfig";
import Configuration from "../Configuration";
import LocalStore from "./utils/LocalStore";
import AudioPlayUtils from "./utils/AudioPlayUtils";
import achievementSys from "./achievementSys";

export default class MainUi extends main {
    static instance: MainUi;
    private curMaxLevel: number;
  //  private selctLevel:number;

    private jumpSkillNum:number=100;
    private runSkillNum:number=50;
    private rollSkillNum:number=200;
    private CreazyModeNum:number=500;
    public isloaded:boolean=false;
    private startCgNum:number=10;
    private unlockCgNum:number=50;


    constructor() {
        super();
        
        MainUi.instance = this;
        this.detail.clickHandler = Handle.create(this, this.onDetail, null, false);
        this.StartGame.clickHandler = Handle.create(this, this.onStartGBefore,null,false);
        this.Start2.clickHandler=Handle.create(this,this.onStartG,null,false);
        this.select.clickHandler = Handle.create(this, this.onSelect, null, false);
        this.shop.clickHandler = Handle.create(this, this.onShop, null, false);
        this.btnClose.clickHandler = Handle.create(this, this.onClose, null, false);

        this.jumpbuy.clickHandler=Handle.create(this,this.onJumpBuy,null,false);
        this.runbuy.clickHandler=Handle.create(this,this.onRunBuy,null,false);
        this.rollbuy.clickHandler=Handle.create(this,this.onRollBuy,null,false);

        this.buyStartCg.clickHandler=Handle.create(this,this.onBuyStartCg,null,false);
        this.buyUnlockNext.clickHandler=Handle.create(this,this.onBuyUnlockNext,null,false);
        this.buyCrezyMode.clickHandler=Handle.create(this,this.onBuyCreazyMode,null,false);

        //按钮选中事件
        this.jump.clickHandler=Handle.create(this,this.onSelectSkill,[2],false);
        this.run.clickHandler=Handle.create(this,this.onSelectSkill,[1],false);
        this.roll.clickHandler=Handle.create(this,this.onSelectSkill,[3],false);
        this.normal.clickHandler=Handle.create(this,this.onNormalSelect,null,false);
        this.crazyMode.clickHandler=Handle.create(this,this.onCrazyModeSelect,null,false);
        this.addT.clickHandler=Handle.create(this,this.getMoneyV,null,false);
        this.ys.clickHandler=Handle.create(this,this.ysHandle,null,false);
        this.ns.clickHandler=Handle.create(this,this.nsHandle,null,false);
        this.check.on(Laya.Event.CLICK, this, this.AudioSourceClick);
        this.girl.clickHandler=Handle.create(this,this.onRank,null,false);
        this.player.on(Laya.Event.CLICK,this,this.onAchievement);
        this.list.visible = false;

        if (localStorage.getItem("audioPlay") != null) {
            var audioPlayBool = Boolean(Number(localStorage.getItem("audioPlay")));
            Configuration.audioPlay = audioPlayBool;
            this.check.selected = audioPlayBool;
        }

        if (LocalStore.loadBoolValue(LocalStore.animStartCgPlay) != null) {

            Configuration.startCgPlay = LocalStore.loadBoolValue(LocalStore.animStartCgPlay);
        }

        if (LocalStore.loadValue(LocalStore.curMaxLevel) != null) {
         
            Configuration.currentAlreadyLevel = Number(LocalStore.loadValue(LocalStore.curMaxLevel));
        }

        if (LocalStore.loadValue(LocalStore.curSelectLevel) != null) {
          
            Configuration.currentSelectLevel = Number(LocalStore.loadValue(LocalStore.curSelectLevel));
        }

        if(LocalStore.loadValue(LocalStore.holdMoney)!=null){
            Configuration.holdGoldNum = Number(LocalStore.loadValue(LocalStore.holdMoney));
        }
        ///New
        if (LocalStore.loadValue(LocalStore.hitGetCoin) != null) {
          
            Configuration.hitGetCoin = Number(LocalStore.loadValue(LocalStore.hitGetCoin));
        }
        if (LocalStore.loadValue(LocalStore.hitSlimNum) != null) {
          
            Configuration.hitSlimNum = Number(LocalStore.loadValue(LocalStore.hitSlimNum));
        }

        if (LocalStore.loadValue(LocalStore.hitFatNum) != null) {
          
            Configuration.hitFatNum = Number(LocalStore.loadValue(LocalStore.hitFatNum));
        }
        if (LocalStore.loadValue(LocalStore.adsNum) != null) {
          
            Configuration.adsNum = Number(LocalStore.loadValue(LocalStore.adsNum));
        }
        if (LocalStore.loadBoolValue(LocalStore.adsTime) != null) {
          
            Configuration.canAds = LocalStore.loadBoolValue(LocalStore.adsTime);
        }

        if(LocalStore.loadValue(LocalStore.CrazyMode)!=null){
            Configuration.crazyMode = LocalStore.loadBoolValue(LocalStore.CrazyMode);

        }
        if(LocalStore.loadValue(LocalStore.jumpSkill)!=null){
            Configuration.jumpSkill=LocalStore.loadBoolValue(LocalStore.jumpSkill);

        }

        if(LocalStore.loadValue(LocalStore.isCrazyMode)!=null){
            Configuration.isCreazyMode=LocalStore.loadBoolValue(LocalStore.isCrazyMode);

        }
        if(LocalStore.loadValue(LocalStore.rollSkill)!=null){
            Configuration.rollSkill=LocalStore.loadBoolValue(LocalStore.rollSkill);

        }
        if(LocalStore.loadValue(LocalStore.runSkill)!=null){
            Configuration.rushSKill=LocalStore.loadBoolValue(LocalStore.runSkill);

        }

        if(LocalStore.loadValue(LocalStore.currenSelectSkill)!=null){
            Configuration.currenSelectSkill=(Number)(LocalStore.loadValue(LocalStore.currenSelectSkill));
        }

        for(var i=1;i<=achievementSys.num;i++){
            if(LocalStore.loadValue("achieveMentData"+i)!=null){
                Configuration["achieveMentData"+i]=LocalStore.loadBoolValue("achieveMentData"+i);
            }

            if(LocalStore.loadValue("achieveMentData"+i+"Num")!=null){
                Configuration["achieveMentData"+i+"Num"]=(Number)(LocalStore.loadValue("achieveMentData"+i+"Num"));
            }

        }

        if(Configuration.jumpSkill==true){
            this.jump.disabled=false;
            this.jumpbuy.visible=false;
        }
        if(Configuration.rollSkill==true){
            this.roll.disabled=false;
            this.rollbuy.visible=false;
        }
        if(Configuration.rushSKill==true){
            this.run.disabled=false;
            this.runbuy.visible=false;
        }
        if(Configuration.crazyMode==true){
            this.crazyMode.disabled=false;
            this.buyCrezyMode.visible=false;
        }
        //
        //this.selctLevel=Configuration.currentSelectLevel;
        this.curMaxLevel = Configuration.currentAlreadyLevel;
        AudioPlayUtils.changeAll();
        this.onSelectSkill(Configuration.currenSelectSkill);
        this.init();
        if(Configuration.adsNum<0||Configuration.canAds==false){
           this.callback();
        }        
        if(Configuration.isCreazyMode==true){
            this.onCrazyModeSelect();
        }
        // if(localStorage)
    }

    onAchievement(){
        this.baseVisble();
        this.achievement.visible=true;

    }

    onRank(){
        //this.baseVisble();
        //this.rank.visible=true;
        //console.log("11");
        var score =Configuration.hitFatNum+Configuration.hitSlimNum;
        Laya.Browser.window.h5api.submitRankScore(Configuration.rankId, score, this.rankback);

    }
    rankback(res){  
        console.log('提交结果：', res.data.score, res.data.rank);
        Laya.Browser.window.h5api.showRankList()
    }

    ysHandle(){

        //播放广告
        if(Configuration.adsNum>0){
            Configuration.adsNum--;
            LocalStore.SaveValue(LocalStore.adsNum,String(Configuration.adsNum));
            this.adsLabel.text="（当前次数:"+Configuration.adsNum+"）"
            Laya.Browser.window.h5api.playAd(this.playAdcallback);
 
        }
        else
            this.alertMessage("你今天的广告次数已经用完了");

    }
    callback(){
 
        Configuration.adsNum=9;
        Configuration.canAds=true;
        LocalStore.SaveBoolValue(LocalStore.adsTime,Configuration.canAds);
        LocalStore.SaveValue(LocalStore.adsNum,String(Configuration.adsNum));
    }

    playAdcallback(obj){
        console.log('代码:' + obj.code + ',消息:' + obj.message)
        if(obj.code === 10000){
            console.log('开始播放')
        } else if(obj.code === 10001){
            var randomMoney:number=Math.floor(Math.random() * (25 - 5) + 5);
            MainUi.instance.onGetCoin(randomMoney);
            console.log('播放结束')
        } else {
            MainUi.instance.alertMessage("你今天的广告次数已经用完了");
            Configuration.adsNum=0;
            console.log('广告异常')
        }
    }

    nsHandle(){
        this.getMoneyPanel.visible=false;
        this.btnClose.visible=true;
        this.shopContent.visible=true;
    }



    onSelectSkill(skillIndex){
        if(Configuration.jumpSkill==true)
            this.jump.disabled=false;
        if(Configuration.rushSKill==true)
            this.run.disabled=false;
        if(Configuration.rollSkill==true)    
        this.roll.disabled=false;
        if(skillIndex==1){this.run.disabled=true;}
        else if(skillIndex==2){this.jump.disabled=true;}
        else if(skillIndex==3){this.roll.disabled=true;}
        Configuration.currenSelectSkill=skillIndex;
        this.skillSelect.x=153+(skillIndex-1)*300;
        LocalStore.SaveValue(LocalStore.currenSelectSkill,String(skillIndex));
        if(skillIndex!=0)
            this.skillSelect.visible=true;
        else 
            this.skillSelect.visible=false;
    
    }

    onNormalSelect(){
        Configuration.isCreazyMode=false;
        LocalStore.SaveBoolValue(LocalStore.isCrazyMode,false);
        this.manSelect.x=437;
        this.normal.disabled=true;
        this.crazyMode.disabled=false;
    }
    
    onCrazyModeSelect(){
        Configuration.isCreazyMode=true;
        LocalStore.SaveBoolValue(LocalStore.isCrazyMode,true);
        this.manSelect.x=744;
        this.crazyMode.disabled=true;
        this.normal.disabled=false;
    }

    onClose() {
        this.panel.visible = false;
        this.StartGame.visible = true;
        this.select.visible = true;
        this.shop.visible = true;
        this.check.visible = true;
        this.title.visible = true;
        this.shopContent.visible=false;
        this.rule.visible=false;
        this.Start2.visible=false;
        this.list.visible = false;
        this.player.visible=true;
        this.girl.visible=true;
        this.achievement.visible=false;
    }
    init() {

        AudioPlayUtils.playMusic("res/bgm.mp3");
        this.initLevel();
        this.initAchievement();
        this.initTip();
        Laya.Scene.load(GameConfig.startScene,Laya.Handler.create(this,function(){
            MainUi.instance.isloaded=true;
            MainUi.instance.StartGame.disabled=false;}));
    }


    initLevel(){
        var dates: Array<any>;
        dates = [];
        for (var level = 1; level <= Configuration.levelNum; level++) {
            var date:any;
            if (level <= this.curMaxLevel) {
                date = { btn: { label: "" + level, clickHandler: Handle.create(this, this.selectLevel, [level], true),skin: "comp/img_blank.png", labelColors: "#ffffff", disabled: false  } };
            }
            else {
                date = { btn: { label: "" + level, skin: "comp/label.png", labelColors: "#000000", disabled: true } };
            }
            dates.push(date);
        }
        this.list.array = dates;
    }

    initAchievement(){
        var dates: Array<any>;
        dates = [];
        achievementSys.regeneral();
        for (var num = 1; num <= achievementSys.num; num++) {
            dates.push(achievementSys["date"+num])

        }

        this.achiList.array = dates;

    }

    initTip(){
        Configuration.tipText=new Array<string>();
        Configuration.tipText=[];
        Configuration.tipText.push("有一些关卡需要搭配商店里的新技能才能过关");
        Configuration.tipText.push("游戏中点击可以释放技能，而冲刺可以更快地过关哦");
        Configuration.tipText.push("蓄力条蓄满了，也是可以继续蓄力的哦！");
        Configuration.tipText.push("跳跃和翻滚技能都可以越过一个敌人，赶快去商店里购买吧！");
        Configuration.tipText.push("每天都可以通过击碎汽车、油桶、看广告获取额外的金币呢");
        Configuration.tipText.push("里模式下，一开始就具备冲刺技能哦！");
        Configuration.tipText.push("本游戏的制作人：俊壳");
    }

    selectLevel(level:number) {
        Configuration.currentSelectLevel=level;
        Laya.Scene.open(GameConfig.startScene, true);

    }

    AudioSourceClick(level: string) {

        Configuration.audioPlay = this.check.selected;
        localStorage.setItem("audioPlay", String(Number(this.check.selected)));
        console.log(this.check.selected);
        AudioPlayUtils.changeAll();

    }



    baseVisble(): void {
        this.onClose();
        this.panel.visible = true;
        this.StartGame.visible = false;
        this.select.visible = false;
        this.title.visible = false;
        this.shop.visible = false;
        this.check.visible = false;
        this.girl.visible=false;

    }

    //onRank(): void {
    //    this.baseVisble();
    //    Laya.Browser.window.h5api.getRanking(this.callback)
    //}

    onShop(): void {
        this.baseVisble();
        this.shopContent.visible=true;
        this.hold.text=""+Configuration.holdGoldNum;
    }

    onSelect(): void {
        this.baseVisble();
        this.list.visible = true;
        this.list.selectedIndex=6;
        this.player.visible=false;

    }

    onStartGBefore():void{
     
        if(Configuration.startCgPlay ==false){
            this.onDetail();
        }
        else
            this.onStartG();
    }

    
    onStartG(): void {
        //  this.baseVisble();
        //Laya.Scene.close(Configuration.InitScene);
        if(this.isloaded==true)
            Laya.loader.load(["res/atlas/battle.atlas"],Laya.Handler.create(this,function(){ Laya.Scene.open(GameConfig.startScene, true);}))
       
        // Laya.Scene.open(GameConfig.startScene,true);
     
    }

    onDetail(): void {
        this.baseVisble();
        this.shopContent.visible=false;
        this.rule.visible=true;
        this.Start2.visible=true;
        this.list.visible=false;
    }


    onJumpBuy(){
        this.onBuyItem("跳跃",this.jumpSkillNum,LocalStore.jumpSkill,0,[this.jump,this.jumpbuy],2);
        
    }
    onRunBuy(){
        this.onBuyItem("冲刺",this.runSkillNum,LocalStore.runSkill,0,[this.run,this.runbuy],1);

    }
    onRollBuy(){
        this.onBuyItem("翻滚",this.rollSkillNum,LocalStore.rollSkill,0,[this.roll,this.rollbuy],3);

    }
    onBuyCreazyMode(){
        this.onBuyItem("暴走模式",this.CreazyModeNum,LocalStore.CrazyMode,0,[this.crazyMode,this.buyCrezyMode],0)
    }
    onBuyStartCg(){
        this.onBuyItem("开头动画",this.startCgNum,"startcg",1);

    }

    onBuyUnlockNext(){
        this.onBuyItem("下一关",this.unlockCgNum,"unlockNext",2);

    }

    onBuyItem(realName,itemPrice,itemName,unLockItem,btnItem:Array<any>=null,skillIndex=null){
        if(Configuration.holdGoldNum>=itemPrice){
            Configuration.holdGoldNum-=itemPrice;
            this.hold.text=""+Configuration.holdGoldNum;
            LocalStore.SaveValue(LocalStore.holdMoney,(String)(Configuration.holdGoldNum));
            if(unLockItem==0){
                this.GetText.text="你购买了“"+realName+"”";
                LocalStore.SaveBoolValue(itemName,true);
                Configuration[itemName]=true;
                btnItem[0].disabled=false;
                for(var i=1;i<btnItem.length;i++)
                    btnItem[i].visible=false;
                if(skillIndex!=0)
                    this.onSelectSkill(skillIndex);
                else
                    this.onCrazyModeSelect();
            }
            else{
                this.GetText.text="你解锁了“"+realName+"”";
               
                if(unLockItem==1){
                    //开头动画解锁
                    Configuration.startCgPlay=false;
                    LocalStore.SaveBoolValue(LocalStore.animStartCgPlay,false);
                }
                else if(unLockItem==2){
                    Configuration.currentAlreadyLevel++;
                    LocalStore.SaveValue(LocalStore.curMaxLevel,String(Configuration.currentAlreadyLevel));
                    this.curMaxLevel=Configuration.currentAlreadyLevel;
                    this.initLevel();
                }
            }
            //扣除一部分钱
            AudioPlayUtils.playAudio("sound/Cash.mp3");
            Laya.Tween.to(this.alertPanel,{y:850,ease:Laya.Ease.backOut},300,null,Handle.create(this,function(){
                Laya.timer.once(1000,this,function(){
                    Laya.Tween.to(this.alertPanel,{y:900,ease:Laya.Ease.backOut},300);
                },[this.alertPanel])
            }));

        }else{
            this.GetText.text="你的金钱不够";
            Laya.Tween.to(this.alertPanel,{y:850,ease:Laya.Ease.backOut},300,null,Handle.create(this,function(){
                Laya.timer.once(1000,this,function(){
                    Laya.Tween.to(this.alertPanel,{y:900,ease:Laya.Ease.backOut},300);
                },[this.alertPanel])
            }));
            this.getMoneyV();
            
        }
    }

    getMoneyV(){
        if(Configuration.adsNum>0&&Configuration.canAds){
            //baseVisble
            this.shopContent.visible=false;
            this.getMoneyPanel.visible=true;
            this.btnClose.visible=false;
        }
    }
    onGetCoin(canGetCoin:number):void{
        var days:Date=new Date();  
        Configuration.holdGoldNum+=canGetCoin;       
        this.hold.text=""+Configuration.holdGoldNum;
        this.alertMessage("你获得"+canGetCoin+"枚金币");

    }


    alertMessage(message){
        this.GetText.text=message;
        LocalStore.SaveValue(LocalStore.holdMoney,(String)(Configuration.holdGoldNum));
        Laya.Tween.to(this.alertPanel,{y:850,ease:Laya.Ease.backOut},300,null,Handle.create(this,function(){
            Laya.timer.once(1000,this,function(){
                Laya.Tween.to(this.alertPanel,{y:900,ease:Laya.Ease.backOut},300);
            },[this.alertPanel])
        }));

    }
}
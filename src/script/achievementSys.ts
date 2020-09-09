import Configuration from "../Configuration";
import LocalStore from "./utils/LocalStore";
import MainUi from "./MainUI";

export default class achievementSys {

    static num=6;
       
    static date1 = { 
        pro: { value: 0} ,
        reward:{text:"奖励30金币"},
        des:{text:"击倒10名胖坏蛋"},
        com:{label:"完成",disabled: false,clickHandler:Laya.Handler.create(achievementSys,achievementSys.onBeatFatTen,null,false) }
    };
        
    static date2 = { 
        pro: { value: 0 } ,
        reward:{text:"奖励30金币"},
        des:{text:"击倒10名瘦坏蛋"},
        com:{label:"完成",disabled: false,clickHandler:Laya.Handler.create(achievementSys,achievementSys.onBeatSlitTen,null,false)}
    };
    static date3 = { 
        pro: { value:0 } ,
        reward:{text:"奖励50金币"},
        des:{text:"击倒25名胖坏蛋"},
        com:{label:"完成",disabled: false,clickHandler:Laya.Handler.create(achievementSys,achievementSys.onBeatFatTweentyFive,null,false)}
    };
    static date4 = { 
        pro: { value:0 } ,
        reward:{text:"奖励50金币"},
        des:{text:"击倒25名瘦坏蛋"},
        com:{label:"完成",disabled: false,clickHandler:Laya.Handler.create(achievementSys,achievementSys.onBeatSlitTweentyFive,null,false)}
    };
    static date5 = { 
        pro: { value:0 } ,
        reward:{text:"奖励100金币"},
        des:{text:"击倒50名坏蛋"},
        com:{label:"完成",disabled: false,clickHandler:Laya.Handler.create(achievementSys,achievementSys.onBeatAllfivety,null,false)}
    };
    static date6 = { 
        pro: { value:0 } ,
        reward:{text:"奖励200金币"},
        des:{text:"击倒100名坏蛋"},
        com:{label:"完成",disabled: false,clickHandler:Laya.Handler.create(achievementSys,achievementSys.onBeatAllhundred,null,false)}
    };


    static regeneral(){

        
        this.date1 = { 
            pro: { value: (Configuration.hitFatNum/10)>=1?1:(Configuration.hitFatNum/10) } ,
            reward:{text:"奖励30金币"},
            des:{text:"击倒10名胖坏蛋"},
            com:{label:(Configuration.achieveMentData1==false)?"完成":"已经完成",disabled: Configuration.achieveMentData1,clickHandler:Laya.Handler.create(achievementSys,achievementSys.onBeatFatTen,null,false)}
        };
            
        this.date2 = { 
            pro: { value: (Configuration.hitSlimNum/10)>=1?1:(Configuration.hitSlimNum/10) } ,
            reward:{text:"奖励30金币"},
            des:{text:"击倒10名瘦坏蛋"},
            com:{label:(Configuration.achieveMentData2==false)?"完成":"已经完成",disabled: Configuration.achieveMentData2,clickHandler:Laya.Handler.create(achievementSys,achievementSys.onBeatSlitTen,null,false)}
        };
        this.date3 = { 
            pro: { value:(Configuration.hitFatNum/25)>=1?1:(Configuration.hitFatNum/25)  } ,
            reward:{text:"奖励50金币"},
            des:{text:"击倒25名胖坏蛋"},
            com:{label:(Configuration.achieveMentData3==false)?"完成":"已经完成",disabled: Configuration.achieveMentData3,clickHandler:Laya.Handler.create(achievementSys,achievementSys.onBeatFatTweentyFive,null,false)}
        };
        this.date4 = { 
            pro: { value:(Configuration.hitSlimNum/25)>=1?1:(Configuration.hitSlimNum/25)  } ,
            reward:{text:"奖励50金币"},
            des:{text:"击倒25名瘦坏蛋"},
            com:{label:(Configuration.achieveMentData4==false)?"完成":"已经完成",disabled: Configuration.achieveMentData4,clickHandler:Laya.Handler.create(achievementSys,achievementSys.onBeatSlitTweentyFive,null,false)}
        };
        this.date5 = { 
            pro: { value:((Configuration.hitFatNum+Configuration.hitSlimNum)/50)>=1?1:((Configuration.hitFatNum+Configuration.hitSlimNum)/50) } ,
            reward:{text:"奖励100金币"},
            des:{text:"击倒50名坏蛋"},
            com:{label:(Configuration.achieveMentData5==false)?"完成":"已经完成",disabled: Configuration.achieveMentData5,clickHandler:Laya.Handler.create(achievementSys,achievementSys.onBeatAllfivety,null,false)}
        };
        this.date6 = { 
            pro: { value: ((Configuration.hitFatNum+Configuration.hitSlimNum)/100)>=1?1:((Configuration.hitFatNum+Configuration.hitSlimNum)/100) } ,
            reward:{text:"奖励200金币"},
            des:{text:"击倒100名坏蛋"},
            com:{label:(Configuration.achieveMentData6==false)?"完成":"已经完成",disabled: Configuration.achieveMentData6,clickHandler:Laya.Handler.create(achievementSys,achievementSys.onBeatAllhundred,null,false)}
        };
    }
    

    static onBeatSlitTen(){
        var isAchieve:boolean=(Configuration.hitSlimNum/10)>=1?true:false;
        if(isAchieve==true){
            MainUi.instance.onGetCoin(30);
            Configuration.achieveMentData2=true;
            LocalStore.SaveBoolValue("achieveMentData2",true);
            MainUi.instance.initAchievement();
        }else 
        {
            MainUi.instance.alertMessage("你没有达成这项成就");
        }
    }
    
    static onBeatFatTen(){
        var isAchieve:boolean=(Configuration.hitFatNum/10)>=1?true:false;
        if(isAchieve){
            MainUi.instance.onGetCoin(30);
            Configuration.achieveMentData1=true;
            LocalStore.SaveBoolValue("achieveMentData1",true);
            MainUi.instance.initAchievement();
        }else{
            MainUi.instance.alertMessage("你没有达成这项成就");
        }
    }
    
    static onBeatSlitTweentyFive(){
        var isAchieve:boolean=(Configuration.hitSlimNum/25)>=1?true:false;
        if(isAchieve){
            MainUi.instance.onGetCoin(50);
            Configuration.achieveMentData4=true;
            LocalStore.SaveBoolValue("achieveMentData4",true);
            MainUi.instance.initAchievement();
        }
        else{
            MainUi.instance.alertMessage("你没有达成这项成就");
        }
    }
    
    static onBeatFatTweentyFive(){
        var isAchieve:boolean=(Configuration.hitFatNum/25)>=1?true:false;
        if(isAchieve){
            MainUi.instance.onGetCoin(50);
            Configuration.achieveMentData3=true;
            LocalStore.SaveBoolValue("achieveMentData3",true);
            MainUi.instance.initAchievement();
        }
        else{
            MainUi.instance.alertMessage("你没有达成这项成就");
        }
    }
    
    static onBeatAllfivety(){
        var isAchieve:boolean=((Configuration.hitFatNum+Configuration.hitSlimNum)/50)>=1?true:false;
        if(isAchieve){
            MainUi.instance.onGetCoin(100);
            Configuration.achieveMentData5=true;
            LocalStore.SaveBoolValue("achieveMentData5",true);
            MainUi.instance.initAchievement();
        }
        else{
            MainUi.instance.alertMessage("你没有达成这项成就");
        }

    }

    static onBeatAllhundred(){
        var isAchieve:boolean=((Configuration.hitFatNum+Configuration.hitSlimNum)/100)>=1?true:false;
        if(isAchieve){
            MainUi.instance.onGetCoin(200);
            Configuration.achieveMentData6=true;
            LocalStore.SaveBoolValue("achieveMentData6",true);
            MainUi.instance.initAchievement();
        }
        else{
            MainUi.instance.alertMessage("你没有达成这项成就");
        }
    }



}

export default class Configuration{
    static C_DAY:number=24*60*60*1000;
    static InitScene: any ="test/MainUi.scene";
    static audioPlay: boolean = true;
    static startCgPlay: boolean = false;
    static endCgPlay: boolean = false;
    static currentAlreadyLevel: number = 1;
    static currentSelectLevel:number=1;
    static holdGoldNum: number = 0;
    static levelNum:number=20;
 //   static achievementNum:number=6;
    static soundChannel:Laya.SoundChannel=null;
    static hitGetCoin:number=0;
    static hitGetTime:number=0;
    static hitSlimNum:number=0;
    static hitFatNum:number=0;
    static rankId:number=255;
    static adsNum:number=0;
    static canAds:boolean=false;

    static rollSkill:boolean;
    static rushSKill:boolean=true;
    static jumpSkill:boolean;
    static currenSelectSkill:number=1;
    static tipText:Array<string>;
    static crazyMode:boolean;
    static isCreazyMode:boolean;
    static achieveMentData1:boolean=false;

    static achieveMentData2:boolean=false;

    static achieveMentData3:boolean=false;


    static achieveMentData4:boolean=false;


    static achieveMentData5:boolean=false;


    static achieveMentData6:boolean=false;

    static Xmlarray:Array<any>;
    //static hp:number=5;

}

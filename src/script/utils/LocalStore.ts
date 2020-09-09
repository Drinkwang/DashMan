
export default class LocalStore{

    static audioPlay = "audioPlay";
    static animStartCgPlay = "animStartCgPlay";
    static animEndCgPlay = "animEndCgPlay";
    static curMaxLevel="currenceLevel";
    static curSelectLevel="currenceSeLevel";
    static holdMoney="holdMoney";
    static hitGetCoin="hitGetCoin";
    static hitGetCoinTime="hitGetCoinTime";
    static hitSlimNum="hitSlimNum";
    static hitFatNum="hitFatNum";

    static adsNum="adsNum";
    static adsTime="adsTime";

    //技能相关
    static jumpSkill="jumpSkill";
    static runSkill="rushSkill";
    static rollSkill="rollSkill";

    static currenSelectSkill="currenSelectSkill";

    static CrazyMode="crazyMode";
    static isCrazyMode="iscrazyMode";
    static loadValue(key: string): string {
        return Laya.LocalStorage.getItem(key);
    }



    static SaveValue(key:string,value: string): void {
        Laya.LocalStorage.setItem(key, value);
    }

    static loadBoolValue(key: string): boolean {
        return Boolean(Number(Laya.LocalStorage.getItem(key)));
    }

    static SaveBoolValue(key: string, value: boolean): void {

        Laya.LocalStorage.setItem(key, String(Number(value)));
    }


}
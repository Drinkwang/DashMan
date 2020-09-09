
export default class AniName {

    static idle: string = "guy_idle";
    static chargingA: string = "guy_chargingA";
    static chargingB: string = "guy_chargingB";
    static dash: string = "guy_dash";
    static fall: string = "guy_fall";
    static hurt: string = "guy_hurt";
    static loseBalanc: string = "guy_loseBalanc";
    static roll: string = "guy_roll";

    //enemy �������
    static Lady_die: string = "enemy/Lady_die";
    static Lady_idle: string = "enemy/Lady_idle";

    static fat_die: string = "enemy/fat_die";
    static fat_idle: string = "enemy/fat_idle";

    static slim_die: string = "enemy/slim_die";
    static slim_idle: string = "enemy/slim_idle";


    //item��Ʒ���
   // static bulletin: string = "item/bulletin";

    static NoPeeSign_die: string = "item/NoPeeSign_die";
    static NoPeeSign_idle: string = "item/NoPeeSign_idle";

    static car_die: string = "item/car_die";
    static car_idle: string = "item/car_idle";

    static oildrum_die: string = "item/oildrum_die";
    static oildrum_idle: string = "item/oildrum_idle";

    static ttrlSign_die: string = "item/ttrlSign_die";
    static ttrlSign_idle: string = "item/ttrlSign_idle";

    static i2AniMap: Map<string, string>;

    static i2AniFunction(t: string):string {
        return this.i2AniMap.get(t);

    }

}
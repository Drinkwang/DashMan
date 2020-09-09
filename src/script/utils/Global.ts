module com.utils {
    export class Global {
        public static port: number = 7070;
        public static host: string = "192.168.1.224";
        public static url: string = "";			// 资源获取的地址
        public static debug: boolean = false;
        public static fromNet: boolean = false;
        public static userId: number = 0;
        public static userName: string = null;
        public static pf: string = null;
        public static ver: string = "1.0";
        public static gender: number;
        public static gameVer: string;
        public static controlVer: number;
        public static userGroup: number;
        public static isJoint: boolean = false;
        public static GAME_WIDTH: number = 1600;
        public static GAME_HEIGHT: number = 900;
        public static timeStamp: number;
        public static frameRate: number = 30;
        public static frameTrigger: number = 1;
        public static frameSpaceTime: number = 0;

        public static isLeave: boolean = false;
        public static gameSmoothing: boolean = true;
        public static gameMode: number = 1;

        public static isNew: boolean = false;
        public static isCmdLog: boolean = false;
        public static isLogin: boolean = false;
        public static dealAssertSpaceTime: number = 0.1;

        public static gameId:number = 0;
        public static sig:string = "";
        public static isBackHall:boolean = false;

        constructor() {

        }

        public static parse(flashvars: any): void {
            if (flashvars.host) {
                Global.host = flashvars.host;
                Global.url = flashvars.url;
                Global.pf = flashvars.pf;
                Global.userName = flashvars.userName;
                Global.userId = flashvars.userId;
                Global.sig = flashvars.sig;
                Global.fromNet = true;

                Global.ver = flashvars["ver"];
            }
            //HpEventUtil.setUrl(flashvars);
        }
    }
}
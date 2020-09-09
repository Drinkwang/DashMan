module game.net {
    import RSAKey = com.hrulant.crypto.rsa.RSAKey;
    import Handler = laya.utils.Handler;
    import ECBMode = com.hrulant.crypto.symmetric.ECBMode;
    import AESKey = com.hrulant.crypto.symmetric.AESKey;
    import PKCS5 = com.hrulant.crypto.symmetric.PKCS5;
    import Global = com.utils.Global;
    import ByteArray = com.utils.ByteArray;
    import Cmds = com.utils.Cmds;
    import LoadingUtils = com.utils.LoadingUtils;
    import CommDebugUtil = com.utils.CommDebugUtil;
    import ErrorTip = game.utils.ErrorTip;
    import GetErrorDes = game.utils.GetErrorDes;
    import NetClient = com.net.NetClient;
    import NetIOStream = com.net.NetIOStream;
    import NetMessage = com.net.NetMessage;
    import Message = com.protoc.Message;

    export class Sender {
        private mClient: NetClient;

        private mCmdMap: Object;
        private pubKey: RSAKey;
        private netKey:any;

        private static _instance: Sender;
        private static HEARTBEAT_SPACE: number = 30 * 1000;

        constructor() {
            this.mCmdMap = new Object();
        }

        public static getInstance(): Sender {
            if (this._instance == null) {
                this._instance = new Sender();
            }

            return this._instance;
        }

        public init(): void {
            this.pubKey = RSAKey.parsePublicKey("9efae168785e6e0b6ea44c15e8d77cf86e0a662122192b8a8787b7004eac602fead626de2430a6f2e73ab26c3cc5cefdc695e8336aa64e9b4728bc0737d6fc37a5b5c3bb07701c88f15f4732cff886b1b82d6c0498a7f2eb28e693b3a75b9b8198c508550994c6099e688ed215b6d17f200d610669fb5d0455c2a4b888cefddb", "10001");
            if (this.mClient == null) {
                this.mClient = new NetClient(new NetIOStream, new NetCodes);
                this.mClient.connectHandler = Handler.create(this, this.connectHandler, null, false);
                this.mClient.errorHandler = Handler.create(this, this.errorHandler, null, false);
                this.mClient.closeHandler = Handler.create(this, this.closeHandler, null, false);
                this.mClient.receiveHandler = Handler.create(this, this.receiveHandler, null, false);
                this.mClient.errMsgHandler = Handler.create(this, this.errMsgHandler, null, false);
            }
        }

        public static bind(cmd: number, handler: Handler): boolean {
            var dic: Object = Sender.getInstance() && this._instance.mCmdMap;
            if (dic[cmd] != null) {
                return false;
            }

            dic[cmd] = handler;
            return true;
        }

        public static unbind(cmd: number): void {
            var dic: Object = this._instance.mCmdMap;
            if (dic[cmd] == null) {
                return;
            }

            delete dic[cmd];
        }

        public static connect(host?: string): void {
            if (Global.fromNet) {
                host = Global.host;
            }

            var ss: string[] = host.split(":");
            var ip: string = ss[0];
            var port: number = parseInt(ss[1]);
            Global.host = ip;
            Global.port = port;
            this._instance.mClient.connect(ip, port);
        }

        public static closeConnect(): void {
            var s: NetClient = this._instance.mClient;
            if (s != null && s.connected) {
                s.close();
            }
        }

        public static sendNetMsg(cmd: number, ...args): void {
            var data: string = args.join();
            var msg: NetMessage = NetMessage.buildString(cmd, Global.userId, data);
            this._instance.mClient.sendMsg(msg);
        }

        public static sendNetMessage(msg: NetMessage): void {
            this._instance.mClient.sendMsg(msg);
        }

        public static sendMsg(cmd:number, data:Message){
            let msg: NetMessage = NetMessage.build(cmd, Global.userId, data.writeTo());
            this._instance.mClient.sendMsg(msg);
        }

        public static sendNetMsgByCache(cmd:number, value:any, ...args):void{
            var data: string = args.join();
            var msg: NetMessage = NetMessage.buildString(cmd, Global.userId, data);
            this._instance.mClient.sendMsgByCache(msg, value);
        }

        public static sendNetMessageByCache(msg: NetMessage, value:any): void {
            this._instance.mClient.sendMsgByCache(msg, value);
        }

        public static sendMsgByCache(cmd:number, data:Message, value:any){
            let msg: NetMessage = NetMessage.build(cmd, Global.userId, data.writeTo());
            this._instance.mClient.sendMsgByCache(msg, value);
        }

        public static isConnect():boolean{
            return this._instance.mClient.connected;
        }

        public setNetKey(key:any):void{
            this.netKey = key;
        }

        private receiveHandler(msg: NetMessage, value: any = null): void {
            LoadingUtils.stopSmallLoading && LoadingUtils.stopSmallLoading.run();
            if (msg.cmd == Cmds.LOGIN_ENCRYPT) {
                let dst: ByteArray = new ByteArray();
                this.pubKey.verify(msg.data, dst, msg.data.length);
                this.mClient.key = new ECBMode(new AESKey(dst), new PKCS5());
                Sender.sendNetMsg(Cmds.NET_USER_LOGIN,Global.gameId);
                this.startHeartbeat();
            } else {
                if (msg.hasErr() && !this.mClient.checkPassErr(msg.cmd,msg.ret)) {
                    CommDebugUtil.info("has error by msg:" + msg.cmd + ", error code:" + msg.ret);
                } else {
                    let handler: Handler = this.mCmdMap[msg.cmd];
                    if (handler == null) {
                        CommDebugUtil.warning("can't find message cmd:" + msg.cmd);
                        return;
                    }
                    if (value == undefined) {
                        handler.runWith([msg]);
                    } else {
                        handler.runWith([msg, value]);
                    }
                }
            }
        }

        private onHeartbeat(): void {
            if (this.mClient.connected) {
                this.mClient.sendHeart();
            }
        }

        private startHeartbeat(): void {
            Laya.timer.loop(Sender.HEARTBEAT_SPACE, this, this.onHeartbeat);
        }

        private connectHandler(): void {
            let na:game.net.msg.NetAuth = new game.net.msg.NetAuth();
            na.userId = Global.userId;
            na.netKey = this.netKey;
            na.sig = Global.sig;
            Sender.sendNetMessage(NetMessage.build(Cmds.LOGIN_ENCRYPT, Global.userId, na.writeTo()));
        }

        private closeHandler(): void {
            this.showReconnect();
        }

        private errorHandler(): void {
            if (!Global.isLogin) {
                this.mClient.reconnect();
            } else if (!this.mClient.connected) {
                this.showReconnect();
            }
        }

        private errMsgHandler(errCode:number):void{
            ErrorTip.getInstance().alert(GetErrorDes(errCode));
        }

        private showReconnect(): void {

        }

        static dealMsg(message){
            this._instance.mClient.dealMsg(message);
        }

        static send(msg):boolean{
            return this._instance.mClient.sendMsg(msg);
        }
    }
}
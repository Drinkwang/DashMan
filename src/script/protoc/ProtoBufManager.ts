module com.protoc {
    import EventDispatcher = laya.events.EventDispatcher;
    import Browser = laya.utils.Browser;
    import Handler = laya.utils.Handler;
    import Loader = laya.net.Loader;
    import ByteArray = com.utils.ByteArray;

    export class ProtoBufManager extends EventDispatcher {
        private static _instance: ProtoBufManager;

        private _protoBuf = Browser.window.protobuf;
        private _endFunc;
        private _root;
        private _tempByteArray:ByteArray = new ByteArray();

        constructor() {
            super();
        }

        public static get instance(): ProtoBufManager {
            if (this._instance == null) {
                this._instance = new ProtoBufManager();
            }

            return this._instance;
        }

        public init(urls, endFunc: Function): void {
            this._endFunc = endFunc;
            this._root = new this._protoBuf.Root();

            var array: any = [];
            for (let url of urls) {
                array.push({url: url, type: Loader.TEXT});
            }

            Laya.loader.load(array, Handler.create(null, () => {
                for (var i = 0; i < urls.length; i++) {
                    this._protoBuf.parse(Loader.getRes(urls[i]), this._root);
                }
                this.onComplete();
            }, null, false));
        }

        private onComplete(): void {
            if (this._endFunc) {
                this._endFunc();
            }
            this.event(laya.events.Event.COMPLETE);
        }

        private getMessage(clzz: any): any {
            return this._root.lookup(clzz.getFullClassName());
        }

        private getMessageFormClassName(clzzName: String): any {
            return this._root.lookup(clzzName);
        }

        public encode(message: any): ByteArray {
            var msg = this.getMessage(message);
            this._tempByteArray.clear();
            this._tempByteArray.writeArrayBuffer(msg.encode(message).finish());
            return this._tempByteArray;
        }

        public decode(className: string, data: any): any {
            var msg = this.getMessageFormClassName(className);
           return msg.decode((data as ByteArray)._byteView_);
        }

        public static sdecode(className: string, data: any): any {
           return ProtoBufManager._instance.decode(className, data);
        }
    }
}
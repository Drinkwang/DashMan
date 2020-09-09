namespace script.utils {
    import ByteArray = com.utils.ByteArray;
    import Global = com.utils.Global;
    import Sender = game.net.Sender;
    import URL = laya.net.URL;

    export class CUtils {
        private static mUrl2Ver: any;

        constructor() {
        }

        public static getNetKey(): string {
            return CUtils.mUrl2Ver["net_key"];
        }

        public static init(ab: ArrayBuffer): void {
            if (ab){
                var ba: ByteArray = new ByteArray();
                ba.writeArrayBuffer(ab);
                ba.uncompress();
                ba.position = 0;
                CUtils.mUrl2Ver = JSON.parse(ba.readUTFBytes(ba.length));
                Sender.getInstance().setNetKey(CUtils.getNetKey());

                if (Global.debug = CUtils.mUrl2Ver.debug){
                    Laya.Stat.show(0, 0);
                }

                URL.customFormat = CUtils.url2r;
                URL.basePath = Global.url;
            }
        }

        public static url2r(url: string): string {
            var realurl: string;
            if (CUtils.mUrl2Ver) {
                realurl = CUtils.mUrl2Ver[url];
            }
            if (realurl == null) {
                return url;
            }

            return realurl;
        }

        public static realurl(url: string): string {
            return Global.url + CUtils.url2r(url);
        }
    }
}
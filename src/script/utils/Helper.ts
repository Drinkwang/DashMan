namespace script.utils {
    import Browser = laya.utils.Browser;
    import Handler = laya.utils.Handler;
    import ProtoBufManager = com.protoc.ProtoBufManager;
    import ConfigParse = game.cfg.ConfigParse;
    import App = com.manager.App;
    import ResManager = com.manager.ResManager;
    import ConfigPack = game.cfg.pack.ConfigPack;
    import Loader = laya.net.Loader;
    import Global = com.utils.Global;

    export class Helper {
        public static VERSION: string = "version.log?ver=" + Browser.now();

        public static NULL_PROGRESS:Handler = Handler.create(null, Helper.onNullProgress, null, false);
        private static dict: any = new Object();
		private static progress:Handler = Handler.create(null, Helper.onProgress, null, false);

        constructor() {
        }

        public static getData(): Object {
            return Helper.dict;
        }

        public static loadVer(): void {
            ResManager.loader.start([CUtils.realurl(Helper.VERSION)], Handler.create(null, Helper.onLoadVer), this.progress);
        }

        private static onProgress(progress: number, total: number): void {
        //    Loading.loading.value = progress;
        }

        private static onNullProgress(progress: number, total: number):void{

        }

        private static onLoadVer(): void {
            CUtils.init(Laya.loader.getRes(CUtils.realurl(Helper.VERSION)));
            Helper.loadConfig();
        }

        public static loadConfig(): void {
            ConfigParse.init(Handler.create(null, Helper.onCfgComplete), this.progress);
        }

        private static onCfgComplete(): void {
            ConfigPack.pack();

            Helper.loadFilterWords();
            // ProtoBufManager.instance.init(G_ConstantUrls.PROTOBUF, Helper.loadUI);
        }

        public static loadFilterWords():void
        {
        //    Laya.loader.load([
        //        {url:G_ConstantUrls.TXT_FILTER_WORDS, type:Global.debug ? Loader.TEXT : Loader.BUFFER},
        //        {url:G_ConstantUrls.TXT_FILTER_WORDS_HIGH, type:Global.debug ? Loader.TEXT : Loader.BUFFER},
        //        {url:G_ConstantUrls.TXT_FILTER_WORDS_NUM, type:Global.debug ? Loader.TEXT : Loader.BUFFER}
        //    ], Handler.create(null, this.onFilterWordsComplete), this.progress);
        }

        private static onFilterWordsComplete():void
        {
        //    StringManager.changeFilterMode();
        //   ProtoBufManager.instance.init(G_ConstantUrls.PROTOBUF, Helper.loadUI);
        }

        private static loadUI(): void {
            App.tip.defaultTipHandler = Helper.showDefaultTip;
        //    App.tip.registerTipHandler = Handler.create(game.manager.TipManager.instance, game.manager.TipManager.instance.exec,null,false);

        //    Helper.load(G_ConstantAsserts.Common, Handler.create(null, Helper.onAllComplete), this.progress);
        }

        public static load(urls:string[], complete:Handler, progress:Handler = null):void{
            if (urls.length <= 0){
                complete.run();
            }else{
                ResManager.loader.start(urls, complete, progress || this.progress);
            }
        }

        private static showDefaultTip(text: string): void {

        }

        private static onAllComplete(): void {
        //    if(!Loading.loading.isCheck()) return;
        //   game.manager.Manager.instance.init();
        }
    }
}
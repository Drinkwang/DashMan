module com.manager{
	import Stage = laya.display.Stage;
	import Global = com.utils.Global;
	import AtlasResourceManager = laya.webgl.atlas.AtlasResourceManager;
    import WorkerLoader = laya.net.WorkerLoader;
    import Browser = laya.utils.Browser;

	export class App{
        public static tip: com.manager.TipManagerContent;//laya.ui.TipManager;
		public static layer:LayerManager;
		public static loading:any;


		



		public static init(width:number, height:number, loading:any, frameRate:string = Stage.FRAME_SLOW, scaleMode:string = Stage.SCALE_SHOWALL): void {

		    //设置默认字体
            // laya.display.css.Font.defaultFamily = "微软雅黑,Microsoft YaHei";
            // laya.display.css.Font.defaultFont =  "12px 微软雅黑,Microsoft YaHei";

            Global.GAME_WIDTH = width;
			Global.GAME_HEIGHT = height;

            var flashvars:Object = Browser.window.flashvars || {};
            Global.parse(flashvars);

            WorkerLoader.workerPath = "worker.js";
            WorkerLoader.enable = true;
            Laya.init(width, height, laya.webgl.WebGL);
            Laya.stage.frameRate = frameRate;
            Laya.stage.scaleMode = scaleMode;
			AtlasResourceManager.atlasLimitWidth = AtlasResourceManager.atlasLimitHeight = 128;
            App.tip = new com.manager.TipManagerContent();//new laya.ui.TipManager();重写了一遍，防公用lib覆盖 和 方便处理
			Laya.stage.addChild(App.layer = new LayerManager);
            App.layer.init();
			App.layer.add(new loading, LayerManager.LOADING);
        }
	}
}
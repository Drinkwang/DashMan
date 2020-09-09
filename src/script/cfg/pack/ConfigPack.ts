module game.cfg.pack{
    export class ConfigPack{
        public static pack() {
            let ConfigParse = game.cfg.ConfigParse;
            G_ConstantUrls = ConfigParse.config.url;
            G_ConstantAsserts = ConfigParse.asserts;
            G_ConstantAssertViews = ConfigParse.asserts.View;
            G_ConstantAssertFonts = ConfigParse.asserts.Font;
            game.utils.ConstantErrors = ConfigParse.errorCode;
        }
    }
}
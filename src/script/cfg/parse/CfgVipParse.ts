namespace game.cfg.parse {



    export class CfgVipParse   {
        public static getVipLv(vipExp:number):number
        {
            let cfgVip = ConfigParse.cfgVip;
            for (var i = cfgVip.node.length-1; i>=0; i--) {
                let cfgVipNode = cfgVip.node[i];
                if (vipExp >= cfgVipNode.exp) {
                    return cfgVipNode.level;
                }
            }
            return 0;
        }


        public static getCfgVipNodeByLv(lv:number):CfgVipNode
        {
            let cfgVip = ConfigParse.cfgVip;
            for (var i = 0; i<cfgVip.node.length; i++) {
                var cfgVipNode =  cfgVip.node[i];
                if (cfgVipNode.level == lv) {
                    return cfgVipNode;
                }
            }
            return null;
        }

        /***/
        public static getCfgVipMakeUpByLv(lv:number):CfgVipMakeUp
        {
            let cfgVip = ConfigParse.cfgVip;
            for (var i = 0; i<cfgVip.makeUp.length; i++) {
                var cfgVipMakeUp =  cfgVip.makeUp[i];
                if (cfgVipMakeUp.vipLv == lv) {
                    return cfgVipMakeUp;
                }
            }
            return null;
        }
    }

}
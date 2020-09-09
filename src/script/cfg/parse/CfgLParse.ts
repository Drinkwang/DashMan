namespace game.cfg.parse {
    /**
     * 游戏配置 数据  工具
     */
    export class CfgLParse {

        private static hasSortChuangGuanScoreRdGroup: boolean = false;


        public static getChuangGuanRewardGroupIdByScores(totalScores: number): number {
            if (!this.hasSortChuangGuanScoreRdGroup)
            {//排一下序 防解析顺序有问题
                ConfigParse.cfgChuangguan.scoresRewardGroup.sort(this.sortDDZScoreRdGroup);
            }

            var len: number = ConfigParse.cfgChuangguan.scoresRewardGroup.length;
            for (let i:number = 0; i < len;i++)
            {
                let cfgScoresRdGroup:CfgChuangguanScoresRewardGroup  = ConfigParse.cfgChuangguan.scoresRewardGroup[i];
                if (totalScores <= cfgScoresRdGroup.scores) {
                    return cfgScoresRdGroup.rewardGroupId;
                }
            }

            return ConfigParse.cfgChuangguan.scoresRewardGroup[len - 1].rewardGroupId;
        }

        public static sortDDZScoreRdGroup(o1: CfgChuangguanScoresRewardGroup, o2: CfgChuangguanScoresRewardGroup): number {
            if (o1.idx < o2.idx) {
                return -1;
            } else if (o1.idx > o2.idx) {
                return 1;
            } else {
                return 0;
            }
        }


        public static checkShowInBag(gameId:number,itemId:number,itemType:number): boolean {
            for(let p of ConfigParse.cfgBag.showGameItem)
            {
                if(p.gameId == gameId && p.id == itemId && p.type == itemType)
                {
                    return true;
                }
            }
            return false;
        }


        public static getActTimePackCfg(packId:number): CfgActTimePackPacketItem {
            var vipLv:number = Model.instance.user.vipLv;
            for(let p of ConfigParse.cfgActTimePack.packet)
            {
                if(vipLv >= p.vipLimit[0] && vipLv <= p.vipLimit[1]){
                    for(let item of p.item){
                        if(item.id == packId)
                            return item;
                    }
                }
            }
            return null;
        }


            public static getActYuanXiaoCfg(cfgId:number): CfgActYuanXiaoPacket {
            for(let p of ConfigParse.cfgActYuanXiao.packet)
            {
                if(p.id == cfgId)
                {
                    return p;
                }
            }
            return null;
        }
    }
}
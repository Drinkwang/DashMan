module game.cfg.pack{
    import StringUtil = com.utils.StringUtil;

    export class CPCommon{
		constructor(){

		}

		static gameThemesMap:Object = {};
        static itemCfgMap:any = {};

		static getGameThemes(gameId:number):Array<CfgSkinTheme>{
			let themes:Array<CfgSkinTheme> = this.gameThemesMap[gameId];
			if (!themes){
                for (let t of ConfigParse.cfgSkin.theme){
                    (this.gameThemesMap[t.gameId] || (this.gameThemesMap[t.gameId] = [])).push(t);
				}

				return this.gameThemesMap[gameId];
			}

			return themes;
		}

		static getGame(gameId:number):CfgSkinGame{
			for (let g of ConfigParse.cfgSkin.game) {
				if (g.gameId == gameId)
					return g;
            }
		}

		static getGameName(gameId:number):string{
			return this.getGame(gameId).name;
		}

		static getGameLabels():string{
			let labels = "";
			let gs = ConfigParse.cfgSkin.game;
			let len = gs.length;
            gs.forEach((g, index)=>{
                labels = labels.concat(g.name);
                if (index < len - 1)labels = labels.concat(",");
			});

            return labels;
		}

        static getThemeLabels():string{
            let labels = ConfigParse.text.all.concat(",");
            let ts = ConfigParse.cfgSkin.theme;
            let len = ts.length;
            ts.forEach((t, index)=>{
                labels = labels.concat(t.name);
                if (index < len - 1)labels = labels.concat(",");
            });

            return labels;
        }

		static getShopThemeLabels():string{
            let labels = ConfigParse.text.all.concat(",");
            let ts = ConfigParse.cfgSkin.shopTheme;
            let len = ts.length;
            ts.forEach((tid, index)=>{
				let t = this.getTheme(tid);
                labels = labels.concat(t.name);
                if (index < len - 1)labels = labels.concat(",");
            });

            return labels;
        }

		static getShopItemByTheme(themeId:number):CfgSkinShop[]{
            let shops = ConfigParse.cfgSkin.shop;
			let sis = [];
			shops.forEach((item)=>{
				if (this.getSkinItem(item.itemId).themeId == themeId)sis.push(item);
			});
			return sis;
        }

        static getTheme(id):CfgSkinTheme{
            for (let item of ConfigParse.cfgSkin.theme){
                if (item.themeId == id) return item;
            }

            return null;
        }

        static getThemeIndex(id):number{
			let i = 0;
            for (let item of ConfigParse.cfgSkin.theme){
                if (item.themeId == id) return i;
                ++i;
            }

            return -1;
        }

		static getSkinItem(id):CfgSkinItem{
			for (let item of ConfigParse.cfgSkin.item){
				if (item.itemId == id) return item;
			}

			return null;
		}

		static getSkinItemsByTheme(id):Array<CfgSkinItem>{
			let skinItems:Array<CfgSkinItem> = [];
            for (let item of ConfigParse.cfgSkin.item){
                if (item.itemId == id)skinItems.push(item);
            }

            return skinItems;
		}

		static getTagUrl(id:number){
			return StringUtil.format(G_ConstantUrls.TAG_FORMAT, id);
		}

        static getCoinUrl(id:number){
			return StringUtil.format(G_ConstantUrls.COIN_FORMAT, id);
		}

        static getCoinBaseUrl(id:number){
			return StringUtil.format(G_ConstantUrls.COIN_BASE_FORMAT, id);
		}

        static getGameItemCfg(cfgRd: CfgGameReward): CfgGameItemItem {
            return this.getItem(cfgRd.gameId, cfgRd.itemId, cfgRd.type);
        }

        public static parseNetGameReward(p: NetGameReward): CfgGameReward
        {
            var ret:CfgGameReward = new CfgGameReward();
            ret.gameId = p.gameId;
            ret.itemId = p.itemId;
            ret.type = p.type;
            ret.num = p.num;
            return ret;
        }

        public static getItem(gameId:number, itemId:number, itemType:number):CfgGameItemItem{
            let cfg = this.itemCfgMap[gameId] != undefined ? (this.itemCfgMap[gameId][itemType] != undefined ? this.itemCfgMap[gameId][itemType][itemId] : undefined) : undefined;
            if (cfg == undefined) {
                let items = ConfigParse.cfgGameItem.item;
                for (let item of items){
                    if (item.gameId == gameId && item.id == itemId && itemType == item.type){
                        this.itemCfgMap[gameId] = this.itemCfgMap[gameId] || {}
                        this.itemCfgMap[gameId][itemType] = this.itemCfgMap[gameId][itemType] || {};
                        this.itemCfgMap[gameId][itemType][itemId] = item;
                        return item;
                    }
                }
            }


			return cfg;
		}

        public static getDDZQuickField(matchId){
            let money = Model.instance.user.money;
            let i = 0;
            for (let need of ConfigParse.cfgField.quick[matchId]){
                if (money < need){
                    return i;
                }
                ++i;
            }

            return i;
        }
	}
}
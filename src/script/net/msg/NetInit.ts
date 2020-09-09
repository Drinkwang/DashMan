namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetInit extends Message{
		public user:NetUser;
		public items: Array<NetItem> = [];
		public doleMoney?:NetDoleMoney;
		public serverTime:number;
		public zoneOffset:number;
		public gameList: Array<NetGameInfo> = [];
		public adList: Array<NetAdInfo> = [];
		public closeFuncs: Array<NetCloseFunc> = [];
		public firstLogin?:number;
		public activities: Array<NetActivity> = [];
		public isWeek?:boolean;
		public mainNotice: Array<NetMainNotice> = [];
		public isNew?:boolean;
		public guide?:NetGuide;
		public infoQQ?:NetInfoQQ;
		public isAllVipGiftBagGet:boolean;
		public isReDual?:boolean;
		public wordFilter?:NetWordFilter;
		public activityLittleGifts?:NetActivityLittleGifts;
		public tasks: Array<NetGuideTask> = [];
		public gp?:number;
		public playLimit: Array<NetPlayLimit> = [];
		public acr?:NetActivityResurrection;
		public isActGrowthFund?:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetInit';
		}

		public static mergeFrom(input: ByteArray): NetInit {
			return ProtoBufManager.instance.decode('game.net.msg.NetInit', input);
		}

	}
}
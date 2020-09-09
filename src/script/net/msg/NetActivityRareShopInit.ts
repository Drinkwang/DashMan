namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivityRareShopInit extends Message{
		public activityRareShop?:NetActivityRareShop;
		public activity?:NetActivity;
		public items: Array<NetItemExtend> = [];
		public cost?:number;
		public reward?:NetGameReward;
		public reward1?:NetGameReward;
		public value?:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivityRareShopInit';
		}

		public static mergeFrom(input: ByteArray): NetActivityRareShopInit {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivityRareShopInit', input);
		}

	}
}
namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivityMysteryShopInit extends Message{
		public packs: Array<NetActivityMysteryPack> = [];
		public userBuyInfo: Array<NetActivityMysteryUserBuy> = [];

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivityMysteryShopInit';
		}

		public static mergeFrom(input: ByteArray): NetActivityMysteryShopInit {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivityMysteryShopInit', input);
		}

	}
}
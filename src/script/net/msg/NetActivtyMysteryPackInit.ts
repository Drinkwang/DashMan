namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivtyMysteryPackInit extends Message{
		public packs: Array<NetActivtyMysteryPack> = [];
		public userBuyInfo: Array<NetActivtyMysteryUserBuy> = [];

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivtyMysteryPackInit';
		}

		public static mergeFrom(input: ByteArray): NetActivtyMysteryPackInit {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivtyMysteryPackInit', input);
		}

	}
}
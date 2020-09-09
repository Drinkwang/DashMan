namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivityMysteryPackInit extends Message{
		public packs: Array<NetActivtyMysteryPack> = [];
		public userBuyInfo: Array<NetActivityMysteryUserBuy> = [];

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivityMysteryPackInit';
		}

		public static mergeFrom(input: ByteArray): NetActivityMysteryPackInit {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivityMysteryPackInit', input);
		}

	}
}
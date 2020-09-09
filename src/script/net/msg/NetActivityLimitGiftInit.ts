namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivityLimitGiftInit extends Message{
		public selfBuy: Array<number> = [];
		public rewards: Array<NetGameReward> = [];
		public num:number;
		public price?:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivityLimitGiftInit';
		}

		public static mergeFrom(input: ByteArray): NetActivityLimitGiftInit {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivityLimitGiftInit', input);
		}

	}
}
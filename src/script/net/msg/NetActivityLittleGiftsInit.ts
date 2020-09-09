namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivityLittleGiftsInit extends Message{
		public activityLittleGifts?:NetActivityLittleGifts;
		public num?:number;
		public rewards: Array<NetGameReward> = [];

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivityLittleGiftsInit';
		}

		public static mergeFrom(input: ByteArray): NetActivityLittleGiftsInit {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivityLittleGiftsInit', input);
		}

	}
}
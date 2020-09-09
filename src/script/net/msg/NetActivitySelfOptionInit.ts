namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivitySelfOptionInit extends Message{
		public activitySelfOption?:NetActivitySelfOption;
		public num?:number;
		public rewards: Array<NetGameReward> = [];

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivitySelfOptionInit';
		}

		public static mergeFrom(input: ByteArray): NetActivitySelfOptionInit {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivitySelfOptionInit', input);
		}

	}
}
namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivityFestivalInit extends Message{
		public activityFestival?:NetActivityFestival;
		public num?:number;
		public rewards: Array<NetGameReward> = [];
		public consumeRewards: Array<NetGameReward> = [];
		public num1?:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivityFestivalInit';
		}

		public static mergeFrom(input: ByteArray): NetActivityFestivalInit {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivityFestivalInit', input);
		}

	}
}
namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivityWeekGiftsInit extends Message{
		public activityWeekGifts?:NetActivityWeekGifts;
		public num?:number;
		public rewards: Array<NetGameReward> = [];

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivityWeekGiftsInit';
		}

		public static mergeFrom(input: ByteArray): NetActivityWeekGiftsInit {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivityWeekGiftsInit', input);
		}

	}
}
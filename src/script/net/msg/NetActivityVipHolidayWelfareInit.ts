namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivityVipHolidayWelfareInit extends Message{
		public isbuy:number;
		public rewards: Array<NetGameReward> = [];
		public num?:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivityVipHolidayWelfareInit';
		}

		public static mergeFrom(input: ByteArray): NetActivityVipHolidayWelfareInit {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivityVipHolidayWelfareInit', input);
		}

	}
}
namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivityLuckyLotteryInit extends Message{
		public activityLuckyLottery?:NetActivityLuckyLottery;
		public num?:number;
		public rewards: Array<NetGameReward> = [];
		public num1?:number;
		public num2?:number;
		public id?:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivityLuckyLotteryInit';
		}

		public static mergeFrom(input: ByteArray): NetActivityLuckyLotteryInit {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivityLuckyLotteryInit', input);
		}

	}
}
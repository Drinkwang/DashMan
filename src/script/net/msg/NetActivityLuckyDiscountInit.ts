namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivityLuckyDiscountInit extends Message{
		public activityLuckyDiscount?:NetActivityLuckyDiscount;
		public num?:number;
		public rewards: Array<NetGameReward> = [];

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivityLuckyDiscountInit';
		}

		public static mergeFrom(input: ByteArray): NetActivityLuckyDiscountInit {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivityLuckyDiscountInit', input);
		}

	}
}
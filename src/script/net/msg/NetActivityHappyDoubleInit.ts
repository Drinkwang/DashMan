namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivityHappyDoubleInit extends Message{
		public activityHappyDouble?:NetActivityHappyDouble;
		public num?:number;
		public rewards: Array<NetGameReward> = [];
		public num1?:number;
		public num2?:number;
		public id?:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivityHappyDoubleInit';
		}

		public static mergeFrom(input: ByteArray): NetActivityHappyDoubleInit {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivityHappyDoubleInit', input);
		}

	}
}
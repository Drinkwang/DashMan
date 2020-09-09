namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivityHappyDouble extends Message{
		public userId:number;
		public lotteryMultiple:string;
		public lotteryCount:string;
		public isGet:number;
		public actOpenTime?:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivityHappyDouble';
		}

		public static mergeFrom(input: ByteArray): NetActivityHappyDouble {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivityHappyDouble', input);
		}

	}
}
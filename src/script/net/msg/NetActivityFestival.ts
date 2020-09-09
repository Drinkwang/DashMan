namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivityFestival extends Message{
		public userId:number;
		public totalUse:number;
		public lotteryCount:number;
		public exchangeCount?:string;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivityFestival';
		}

		public static mergeFrom(input: ByteArray): NetActivityFestival {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivityFestival', input);
		}

	}
}
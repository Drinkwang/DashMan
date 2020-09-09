namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetExchangeRecord extends Message{
		public id:number;
		public exchangeId:number;
		public userId:number;
		public time:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetExchangeRecord';
		}

		public static mergeFrom(input: ByteArray): NetExchangeRecord {
			return ProtoBufManager.instance.decode('game.net.msg.NetExchangeRecord', input);
		}

	}
}
namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetExchangeInfoRecord extends Message{
		public userId:number;
		public id:number;
		public type:number;
		public count:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetExchangeInfoRecord';
		}

		public static mergeFrom(input: ByteArray): NetExchangeInfoRecord {
			return ProtoBufManager.instance.decode('game.net.msg.NetExchangeInfoRecord', input);
		}

	}
}
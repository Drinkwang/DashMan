namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetRedPacketCarnivalExchangeRecord extends Message{
		public userId:number;
		public exchangeId:number;
		public exchangeTime:number;
		public userName:string;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetRedPacketCarnivalExchangeRecord';
		}

		public static mergeFrom(input: ByteArray): NetRedPacketCarnivalExchangeRecord {
			return ProtoBufManager.instance.decode('game.net.msg.NetRedPacketCarnivalExchangeRecord', input);
		}

	}
}
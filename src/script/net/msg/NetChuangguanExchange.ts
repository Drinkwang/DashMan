namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetChuangguanExchange extends Message{
		public userId:number;
		public exchangeId:number;
		public weekCount:number;
		public totalCount:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetChuangguanExchange';
		}

		public static mergeFrom(input: ByteArray): NetChuangguanExchange {
			return ProtoBufManager.instance.decode('game.net.msg.NetChuangguanExchange', input);
		}

	}
}
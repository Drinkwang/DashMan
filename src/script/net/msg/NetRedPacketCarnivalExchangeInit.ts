namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetRedPacketCarnivalExchangeInit extends Message{
		public records: Array<NetRedPacketCarnivalExchangeRecord> = [];
		public redPacketCarnival:NetRedPacketCarnival;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetRedPacketCarnivalExchangeInit';
		}

		public static mergeFrom(input: ByteArray): NetRedPacketCarnivalExchangeInit {
			return ProtoBufManager.instance.decode('game.net.msg.NetRedPacketCarnivalExchangeInit', input);
		}

	}
}
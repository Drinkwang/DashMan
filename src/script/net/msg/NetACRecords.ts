namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetACRecords extends Message{
		public records: Array<NetACRecord> = [];

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetACRecords';
		}

		public static mergeFrom(input: ByteArray): NetACRecords {
			return ProtoBufManager.instance.decode('game.net.msg.NetACRecords', input);
		}

	}
}
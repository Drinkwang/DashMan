namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetHappyHolidaysCompoundRecords extends Message{
		public records: Array<NetHappyHolidaysCompoundRecord> = [];

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetHappyHolidaysCompoundRecords';
		}

		public static mergeFrom(input: ByteArray): NetHappyHolidaysCompoundRecords {
			return ProtoBufManager.instance.decode('game.net.msg.NetHappyHolidaysCompoundRecords', input);
		}

	}
}
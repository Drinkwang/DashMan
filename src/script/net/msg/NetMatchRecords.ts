namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetMatchRecords extends Message{
		public matchId:number;
		public records: Array<NetMatchRecord> = [];

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetMatchRecords';
		}

		public static mergeFrom(input: ByteArray): NetMatchRecords {
			return ProtoBufManager.instance.decode('game.net.msg.NetMatchRecords', input);
		}

	}
}
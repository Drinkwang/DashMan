namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetCollTaskList extends Message{
		public taskList: Array<NetCollTask> = [];

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetCollTaskList';
		}

		public static mergeFrom(input: ByteArray): NetCollTaskList {
			return ProtoBufManager.instance.decode('game.net.msg.NetCollTaskList', input);
		}

	}
}
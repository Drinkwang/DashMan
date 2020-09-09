namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetTaskRewardResult extends Message{
		public result:NetResult;
		public trigNewTasks: Array<NetCollTask> = [];

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetTaskRewardResult';
		}

		public static mergeFrom(input: ByteArray): NetTaskRewardResult {
			return ProtoBufManager.instance.decode('game.net.msg.NetTaskRewardResult', input);
		}

	}
}
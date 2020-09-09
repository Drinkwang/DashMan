namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivityTask extends Message{
		public userId:number;
		public taskId:number;
		public taskType:number;
		public taskCount:number;
		public taskGain:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivityTask';
		}

		public static mergeFrom(input: ByteArray): NetActivityTask {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivityTask', input);
		}

	}
}
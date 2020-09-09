namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetCollTask extends Message{
		public taskId:number;
		public gameId:number;
		public taskType:number;
		public curValue:number;
		public state:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetCollTask';
		}

		public static mergeFrom(input: ByteArray): NetCollTask {
			return ProtoBufManager.instance.decode('game.net.msg.NetCollTask', input);
		}

	}
}
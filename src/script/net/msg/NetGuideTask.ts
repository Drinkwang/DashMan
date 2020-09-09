namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetGuideTask extends Message{
		public taskId:number;
		public value:number;
		public gain:boolean;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetGuideTask';
		}

		public static mergeFrom(input: ByteArray): NetGuideTask {
			return ProtoBufManager.instance.decode('game.net.msg.NetGuideTask', input);
		}

	}
}
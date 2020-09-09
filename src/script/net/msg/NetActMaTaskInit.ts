namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActMaTaskInit extends Message{
		public tasks: Array<NetActMaTask> = [];
		public num:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActMaTaskInit';
		}

		public static mergeFrom(input: ByteArray): NetActMaTaskInit {
			return ProtoBufManager.instance.decode('game.net.msg.NetActMaTaskInit', input);
		}

	}
}
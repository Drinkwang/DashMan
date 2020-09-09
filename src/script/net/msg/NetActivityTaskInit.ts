namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivityTaskInit extends Message{
		public tasks: Array<NetActivityTask> = [];
		public num?:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivityTaskInit';
		}

		public static mergeFrom(input: ByteArray): NetActivityTaskInit {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivityTaskInit', input);
		}

	}
}
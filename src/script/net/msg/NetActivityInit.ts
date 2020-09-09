namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivityInit extends Message{
		public activities: Array<NetActivity> = [];

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivityInit';
		}

		public static mergeFrom(input: ByteArray): NetActivityInit {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivityInit', input);
		}

	}
}
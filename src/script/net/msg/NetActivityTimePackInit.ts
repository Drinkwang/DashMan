namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivityTimePackInit extends Message{
		public packs: Array<NetActivityTimePack> = [];

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivityTimePackInit';
		}

		public static mergeFrom(input: ByteArray): NetActivityTimePackInit {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivityTimePackInit', input);
		}

	}
}
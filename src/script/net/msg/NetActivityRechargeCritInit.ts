namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivityRechargeCritInit extends Message{
		public arcs: Array<NetActivityRechargeCrit> = [];

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivityRechargeCritInit';
		}

		public static mergeFrom(input: ByteArray): NetActivityRechargeCritInit {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivityRechargeCritInit', input);
		}

	}
}
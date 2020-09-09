namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetPropagateList extends Message{
		public propagates: Array<NetPropagate> = [];

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetPropagateList';
		}

		public static mergeFrom(input: ByteArray): NetPropagateList {
			return ProtoBufManager.instance.decode('game.net.msg.NetPropagateList', input);
		}

	}
}
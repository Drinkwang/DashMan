namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetIntList extends Message{
		public list: Array<number> = [];

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetIntList';
		}

		public static mergeFrom(input: ByteArray): NetIntList {
			return ProtoBufManager.instance.decode('game.net.msg.NetIntList', input);
		}

	}
}
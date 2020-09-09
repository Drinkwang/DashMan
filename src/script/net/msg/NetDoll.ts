namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetDoll extends Message{
		public useId:number;
		public freeCount:number;
		public totalCount:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetDoll';
		}

		public static mergeFrom(input: ByteArray): NetDoll {
			return ProtoBufManager.instance.decode('game.net.msg.NetDoll', input);
		}

	}
}
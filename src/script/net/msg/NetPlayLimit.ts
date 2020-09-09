namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetPlayLimit extends Message{
		public vipLv:number;
		public limit:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetPlayLimit';
		}

		public static mergeFrom(input: ByteArray): NetPlayLimit {
			return ProtoBufManager.instance.decode('game.net.msg.NetPlayLimit', input);
		}

	}
}
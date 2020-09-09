namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetGameLimit extends Message{
		public userId:number;
		public data:string;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetGameLimit';
		}

		public static mergeFrom(input: ByteArray): NetGameLimit {
			return ProtoBufManager.instance.decode('game.net.msg.NetGameLimit', input);
		}

	}
}
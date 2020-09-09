namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetAuth extends Message{
		public userId:number;
		public netKey:string;
		public sig?:string;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetAuth';
		}

		public static mergeFrom(input: ByteArray): NetAuth {
			return ProtoBufManager.instance.decode('game.net.msg.NetAuth', input);
		}

	}
}
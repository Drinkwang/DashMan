namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetReDual extends Message{
		public userId:number;
		public reIds:string;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetReDual';
		}

		public static mergeFrom(input: ByteArray): NetReDual {
			return ProtoBufManager.instance.decode('game.net.msg.NetReDual', input);
		}

	}
}
namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetPrivilege extends Message{
		public userId:number;
		public newHand:number;
		public growUp?:number;
		public dailyGift:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetPrivilege';
		}

		public static mergeFrom(input: ByteArray): NetPrivilege {
			return ProtoBufManager.instance.decode('game.net.msg.NetPrivilege', input);
		}

	}
}
namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetNobility extends Message{
		public userId:number;
		public lastWeekScore:number;
		public thisWeekScore:number;
		public nobilityRedTip:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetNobility';
		}

		public static mergeFrom(input: ByteArray): NetNobility {
			return ProtoBufManager.instance.decode('game.net.msg.NetNobility', input);
		}

	}
}
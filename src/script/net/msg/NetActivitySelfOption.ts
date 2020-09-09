namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivitySelfOption extends Message{
		public userId:number;
		public count:number;
		public isBuy:number;
		public isBuyOne:number;
		public countOne:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivitySelfOption';
		}

		public static mergeFrom(input: ByteArray): NetActivitySelfOption {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivitySelfOption', input);
		}

	}
}
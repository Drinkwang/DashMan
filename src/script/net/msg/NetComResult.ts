namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetComResult extends Message{
		public rewards: Array<NetGameReward> = [];
		public value1?:number;
		public value2?:number;
		public v32: Array<number> = [];
		public v64: Array<number> = [];

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetComResult';
		}

		public static mergeFrom(input: ByteArray): NetComResult {
			return ProtoBufManager.instance.decode('game.net.msg.NetComResult', input);
		}

	}
}
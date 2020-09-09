namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetResult extends Message{
		public rewards: Array<NetGameReward> = [];
		public items: Array<NetItem> = [];
		public money?:number;
		public diamond?:number;
		public happyTicket?:number;
		public value1?:number;
		public value2?:number;
		public value3?:number;
		public vipExp?:number;
		public value4?:string;
		public dbCoin?:number;
		public v32: Array<number> = [];
		public v64: Array<number> = [];
		public vs: Array<string> = [];
		public value5?:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetResult';
		}

		public static mergeFrom(input: ByteArray): NetResult {
			return ProtoBufManager.instance.decode('game.net.msg.NetResult', input);
		}

	}
}
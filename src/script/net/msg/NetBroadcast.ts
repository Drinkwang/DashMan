namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetBroadcast extends Message{
		public type?:number;
		public content?:string;
		public userName?:string;
		public vipLvs: Array<number> = [];
		public vn32: Array<number> = [];
		public vn64: Array<number> = [];
		public vs: Array<string> = [];
		public rewards: Array<NetReward> = [];

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetBroadcast';
		}

		public static mergeFrom(input: ByteArray): NetBroadcast {
			return ProtoBufManager.instance.decode('game.net.msg.NetBroadcast', input);
		}

	}
}
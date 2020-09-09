namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetDollReward extends Message{
		public id:number;
		public type:number;
		public rewards: Array<NetGameReward> = [];

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetDollReward';
		}

		public static mergeFrom(input: ByteArray): NetDollReward {
			return ProtoBufManager.instance.decode('game.net.msg.NetDollReward', input);
		}

	}
}
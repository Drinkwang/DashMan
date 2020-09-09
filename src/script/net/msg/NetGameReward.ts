namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetGameReward extends Message{
		public gameId:number;
		public itemId:number;
		public type:number;
		public num:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetGameReward';
		}

		public static mergeFrom(input: ByteArray): NetGameReward {
			return ProtoBufManager.instance.decode('game.net.msg.NetGameReward', input);
		}

	}
}
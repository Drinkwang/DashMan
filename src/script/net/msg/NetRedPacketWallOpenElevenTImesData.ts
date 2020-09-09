namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetRedPacketWallOpenElevenTImesData extends Message{
		public rewards: Array<NetGameReward> = [];
		public isBigReward: Array<boolean> = [];
		public hasAdditionalReward?:boolean;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetRedPacketWallOpenElevenTImesData';
		}

		public static mergeFrom(input: ByteArray): NetRedPacketWallOpenElevenTImesData {
			return ProtoBufManager.instance.decode('game.net.msg.NetRedPacketWallOpenElevenTImesData', input);
		}

	}
}
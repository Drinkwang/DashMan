namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetRedPacketWallOpenRedPacketData extends Message{
		public rewards: Array<NetGameReward> = [];
		public isBigReward: Array<boolean> = [];
		public hasAdditionalReward?:boolean;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetRedPacketWallOpenRedPacketData';
		}

		public static mergeFrom(input: ByteArray): NetRedPacketWallOpenRedPacketData {
			return ProtoBufManager.instance.decode('game.net.msg.NetRedPacketWallOpenRedPacketData', input);
		}

	}
}
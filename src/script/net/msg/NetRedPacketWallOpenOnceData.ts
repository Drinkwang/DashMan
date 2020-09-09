namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetRedPacketWallOpenOnceData extends Message{
		public reward:NetGameReward;
		public isBigReward:boolean;
		public hasAdditionalReward?:boolean;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetRedPacketWallOpenOnceData';
		}

		public static mergeFrom(input: ByteArray): NetRedPacketWallOpenOnceData {
			return ProtoBufManager.instance.decode('game.net.msg.NetRedPacketWallOpenOnceData', input);
		}

	}
}
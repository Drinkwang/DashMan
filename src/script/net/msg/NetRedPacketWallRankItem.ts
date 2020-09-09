namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetRedPacketWallRankItem extends Message{
		public userName:string;
		public gameReward:NetGameReward;
		public redpacketId:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetRedPacketWallRankItem';
		}

		public static mergeFrom(input: ByteArray): NetRedPacketWallRankItem {
			return ProtoBufManager.instance.decode('game.net.msg.NetRedPacketWallRankItem', input);
		}

	}
}
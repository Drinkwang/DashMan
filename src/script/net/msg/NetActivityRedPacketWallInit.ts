namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivityRedPacketWallInit extends Message{
		public luckyList: Array<NetRedPacketWallRankItem> = [];
		public actEndTime:number;
		public rewardPoolNum:number;
		public redPacketsLeftNum: Array<number> = [];
		public nextRoundStartTime?:number;
		public openRedPacketData?:NetRedPacketWallOpenRedPacketData;
		public userData:NetRedPacketWallUserData;
		public leftRedPacketRounds:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivityRedPacketWallInit';
		}

		public static mergeFrom(input: ByteArray): NetActivityRedPacketWallInit {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivityRedPacketWallInit', input);
		}

	}
}
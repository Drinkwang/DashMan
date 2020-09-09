namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetMatchInit extends Message{
		public matchId:number;
		public dayIntegral:number;
		public dayRank:number;
		public weekIntegral?:number;
		public week?:NetMatchWeek;
		public matchCount:number;
		public matchIndex:number;
		public hasReward:boolean;
		public rankInfos: Array<NetMatchRankInfo> = [];

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetMatchInit';
		}

		public static mergeFrom(input: ByteArray): NetMatchInit {
			return ProtoBufManager.instance.decode('game.net.msg.NetMatchInit', input);
		}

	}
}
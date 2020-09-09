namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetDDZChuangGuan extends Message{
		public freeStartTime:number;
		public freeReliveTime:number;
		public totalRoundCount:number;
		public totalScores:number;
		public curScores:number;
		public curState:number;
		public curRound:number;
		public getRewardCount:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetDDZChuangGuan';
		}

		public static mergeFrom(input: ByteArray): NetDDZChuangGuan {
			return ProtoBufManager.instance.decode('game.net.msg.NetDDZChuangGuan', input);
		}

	}
}
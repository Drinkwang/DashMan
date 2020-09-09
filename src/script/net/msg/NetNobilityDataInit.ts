namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetNobilityDataInit extends Message{
		public nobility?:NetNobility;
		public playLimitList: Array<NetPlayLimit> = [];
		public playLimitNobilityList: Array<NetPlayLimitNobility> = [];
		public luckyTicketConsumeNum?:number;
		public buYuTotalWin?:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetNobilityDataInit';
		}

		public static mergeFrom(input: ByteArray): NetNobilityDataInit {
			return ProtoBufManager.instance.decode('game.net.msg.NetNobilityDataInit', input);
		}

	}
}
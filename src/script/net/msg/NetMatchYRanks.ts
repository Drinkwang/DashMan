namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetMatchYRanks extends Message{
		public integral?:number;
		public rank?:number;
		public rankInfos: Array<NetMatchRankInfo> = [];

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetMatchYRanks';
		}

		public static mergeFrom(input: ByteArray): NetMatchYRanks {
			return ProtoBufManager.instance.decode('game.net.msg.NetMatchYRanks', input);
		}

	}
}
namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetMatchRankInfo extends Message{
		public rank:number;
		public integral:number;
		public info?:NetInfoQQ;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetMatchRankInfo';
		}

		public static mergeFrom(input: ByteArray): NetMatchRankInfo {
			return ProtoBufManager.instance.decode('game.net.msg.NetMatchRankInfo', input);
		}

	}
}
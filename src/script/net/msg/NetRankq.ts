namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetRankq extends Message{
		public rankId:number;
		public items: Array<NetRankItem> = [];
		public selfValue:number;
		public selfRank?:number;
		public selfValue2?:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetRankq';
		}

		public static mergeFrom(input: ByteArray): NetRankq {
			return ProtoBufManager.instance.decode('game.net.msg.NetRankq', input);
		}

	}
}
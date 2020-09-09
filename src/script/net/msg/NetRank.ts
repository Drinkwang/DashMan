namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetRank extends Message{
		public rankId:number;
		public items: Array<NetRankItem> = [];
		public selfValue:number;
		public selfRank?:number;
		public selfValue2?:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetRank';
		}

		public static mergeFrom(input: ByteArray): NetRank {
			return ProtoBufManager.instance.decode('game.net.msg.NetRank', input);
		}

	}
}
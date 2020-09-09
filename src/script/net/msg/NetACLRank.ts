namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetACLRank extends Message{
		public ranks: Array<NetACRank> = [];
		public selfRank?:NetACRank;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetACLRank';
		}

		public static mergeFrom(input: ByteArray): NetACLRank {
			return ProtoBufManager.instance.decode('game.net.msg.NetACLRank', input);
		}

	}
}
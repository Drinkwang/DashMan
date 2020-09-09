namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetPlayLimitNobility extends Message{
		public nobilityLv:number;
		public limit:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetPlayLimitNobility';
		}

		public static mergeFrom(input: ByteArray): NetPlayLimitNobility {
			return ProtoBufManager.instance.decode('game.net.msg.NetPlayLimitNobility', input);
		}

	}
}
namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetDollInit extends Message{
		public doll:NetDoll;
		public rewards: Array<NetDollReward> = [];
		public dollData:NetDollData;
		public rank?:NetRank;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetDollInit';
		}

		public static mergeFrom(input: ByteArray): NetDollInit {
			return ProtoBufManager.instance.decode('game.net.msg.NetDollInit', input);
		}

	}
}
namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivityLuckyShop extends Message{
		public giftCount1:number;
		public giftCount2:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivityLuckyShop';
		}

		public static mergeFrom(input: ByteArray): NetActivityLuckyShop {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivityLuckyShop', input);
		}

	}
}
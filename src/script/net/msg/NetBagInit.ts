namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetBagInit extends Message{
		public itemL: Array<NetBuyuItem> = [];

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetBagInit';
		}

		public static mergeFrom(input: ByteArray): NetBagInit {
			return ProtoBufManager.instance.decode('game.net.msg.NetBagInit', input);
		}

	}
}
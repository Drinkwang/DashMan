namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetVipGiftBagList extends Message{
		public giftBagList: Array<NetVipGiftBag> = [];

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetVipGiftBagList';
		}

		public static mergeFrom(input: ByteArray): NetVipGiftBagList {
			return ProtoBufManager.instance.decode('game.net.msg.NetVipGiftBagList', input);
		}

	}
}
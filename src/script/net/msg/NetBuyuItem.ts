namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetBuyuItem extends Message{
		public userId:number;
		public itemId:number;
		public itemType:number;
		public itemNum:number;
		public count:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetBuyuItem';
		}

		public static mergeFrom(input: ByteArray): NetBuyuItem {
			return ProtoBufManager.instance.decode('game.net.msg.NetBuyuItem', input);
		}

	}
}
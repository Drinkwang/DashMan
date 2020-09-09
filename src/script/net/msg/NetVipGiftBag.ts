namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetVipGiftBag extends Message{
		public vipLv:number;
		public type:number;
		public buyCount:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetVipGiftBag';
		}

		public static mergeFrom(input: ByteArray): NetVipGiftBag {
			return ProtoBufManager.instance.decode('game.net.msg.NetVipGiftBag', input);
		}

	}
}
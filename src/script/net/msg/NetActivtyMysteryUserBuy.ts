namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivtyMysteryUserBuy extends Message{
		public packId:number;
		public dayCount:number;
		public totalCount:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivtyMysteryUserBuy';
		}

		public static mergeFrom(input: ByteArray): NetActivtyMysteryUserBuy {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivtyMysteryUserBuy', input);
		}

	}
}
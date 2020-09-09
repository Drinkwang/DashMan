namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetShopInit extends Message{
		public money:number;
		public dbCoin:number;
		public luckyTicket:number;
		public rd:NetReDual;
		public dayRecharge:number;
		public dayRecharageLimit:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetShopInit';
		}

		public static mergeFrom(input: ByteArray): NetShopInit {
			return ProtoBufManager.instance.decode('game.net.msg.NetShopInit', input);
		}

	}
}
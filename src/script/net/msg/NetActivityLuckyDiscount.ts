namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivityLuckyDiscount extends Message{
		public userId:number;
		public discount:number;
		public lottery:number;
		public buyRecord?:string;
		public actOpenTime?:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivityLuckyDiscount';
		}

		public static mergeFrom(input: ByteArray): NetActivityLuckyDiscount {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivityLuckyDiscount', input);
		}

	}
}
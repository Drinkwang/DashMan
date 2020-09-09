namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivityZhaYu extends Message{
		public userId:number;
		public warheadRecord?:string;
		public score:number;
		public useMoney:number;
		public userName?:string;
		public headUrl?:string;
		public vipLv?:number;
		public rank?:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivityZhaYu';
		}

		public static mergeFrom(input: ByteArray): NetActivityZhaYu {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivityZhaYu', input);
		}

	}
}
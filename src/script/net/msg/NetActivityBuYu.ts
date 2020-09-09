namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivityBuYu extends Message{
		public userId:number;
		public score:number;
		public actOpenTime?:number;
		public userName?:string;
		public rank?:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivityBuYu';
		}

		public static mergeFrom(input: ByteArray): NetActivityBuYu {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivityBuYu', input);
		}

	}
}
namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetACRank extends Message{
		public userName:string;
		public headUrl:string;
		public vipLv:number;
		public point:number;
		public rank:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetACRank';
		}

		public static mergeFrom(input: ByteArray): NetACRank {
			return ProtoBufManager.instance.decode('game.net.msg.NetACRank', input);
		}

	}
}
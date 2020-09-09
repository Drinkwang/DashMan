namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetGoods extends Message{
		public id:number;
		public itemId:number;
		public value1:string;
		public value2:string;
		public recordId:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetGoods';
		}

		public static mergeFrom(input: ByteArray): NetGoods {
			return ProtoBufManager.instance.decode('game.net.msg.NetGoods', input);
		}

	}
}
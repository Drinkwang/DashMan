namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetPropagate extends Message{
		public id:number;
		public picture:string;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetPropagate';
		}

		public static mergeFrom(input: ByteArray): NetPropagate {
			return ProtoBufManager.instance.decode('game.net.msg.NetPropagate', input);
		}

	}
}
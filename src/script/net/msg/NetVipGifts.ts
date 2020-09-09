namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetVipGifts extends Message{
		public userId:number;
		public buyRecord?:string;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetVipGifts';
		}

		public static mergeFrom(input: ByteArray): NetVipGifts {
			return ProtoBufManager.instance.decode('game.net.msg.NetVipGifts', input);
		}

	}
}
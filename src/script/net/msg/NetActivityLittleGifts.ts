namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivityLittleGifts extends Message{
		public userId:number;
		public isLimitBuy:number;
		public buyRecord?:string;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivityLittleGifts';
		}

		public static mergeFrom(input: ByteArray): NetActivityLittleGifts {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivityLittleGifts', input);
		}

	}
}
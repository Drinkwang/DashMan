namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivityMD extends Message{
		public userId:number;
		public buyGift:number;
		public exchange?:string;
		public buyTime?:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivityMD';
		}

		public static mergeFrom(input: ByteArray): NetActivityMD {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivityMD', input);
		}

	}
}
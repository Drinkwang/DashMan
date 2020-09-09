namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActMD extends Message{
		public userId:number;
		public buyGift:number;
		public exchange?:string;
		public num:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActMD';
		}

		public static mergeFrom(input: ByteArray): NetActMD {
			return ProtoBufManager.instance.decode('game.net.msg.NetActMD', input);
		}

	}
}
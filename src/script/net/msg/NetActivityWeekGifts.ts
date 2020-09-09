namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivityWeekGifts extends Message{
		public userId:number;
		public buyRecord?:string;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivityWeekGifts';
		}

		public static mergeFrom(input: ByteArray): NetActivityWeekGifts {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivityWeekGifts', input);
		}

	}
}
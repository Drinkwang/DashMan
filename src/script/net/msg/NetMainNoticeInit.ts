namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetMainNoticeInit extends Message{
		public mainNotice: Array<NetMainNotice> = [];

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetMainNoticeInit';
		}

		public static mergeFrom(input: ByteArray): NetMainNoticeInit {
			return ProtoBufManager.instance.decode('game.net.msg.NetMainNoticeInit', input);
		}

	}
}
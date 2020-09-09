namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetMailInit extends Message{
		public mails: Array<NetMail> = [];

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetMailInit';
		}

		public static mergeFrom(input: ByteArray): NetMailInit {
			return ProtoBufManager.instance.decode('game.net.msg.NetMailInit', input);
		}

	}
}
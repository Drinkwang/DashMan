namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetThemes extends Message{
		public themes: Array<NetTheme> = [];

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetThemes';
		}

		public static mergeFrom(input: ByteArray): NetThemes {
			return ProtoBufManager.instance.decode('game.net.msg.NetThemes', input);
		}

	}
}
namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetAcitveThemeResult extends Message{
		public theme:NetTheme;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetAcitveThemeResult';
		}

		public static mergeFrom(input: ByteArray): NetAcitveThemeResult {
			return ProtoBufManager.instance.decode('game.net.msg.NetAcitveThemeResult', input);
		}

	}
}
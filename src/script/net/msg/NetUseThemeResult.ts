namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetUseThemeResult extends Message{
		public unUseThemeId:number;
		public useThemeId:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetUseThemeResult';
		}

		public static mergeFrom(input: ByteArray): NetUseThemeResult {
			return ProtoBufManager.instance.decode('game.net.msg.NetUseThemeResult', input);
		}

	}
}
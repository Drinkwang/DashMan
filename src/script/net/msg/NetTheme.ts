namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetTheme extends Message{
		public themeId:number;
		public isUse:boolean;
		public time?:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetTheme';
		}

		public static mergeFrom(input: ByteArray): NetTheme {
			return ProtoBufManager.instance.decode('game.net.msg.NetTheme', input);
		}

	}
}
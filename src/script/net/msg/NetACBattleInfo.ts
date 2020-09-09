namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetACBattleInfo extends Message{
		public act?:NetActivity;
		public rank?:number;
		public points?:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetACBattleInfo';
		}

		public static mergeFrom(input: ByteArray): NetACBattleInfo {
			return ProtoBufManager.instance.decode('game.net.msg.NetACBattleInfo', input);
		}

	}
}
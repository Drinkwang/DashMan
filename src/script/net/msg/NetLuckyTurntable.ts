namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetLuckyTurntable extends Message{
		public userId:number;
		public count:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetLuckyTurntable';
		}

		public static mergeFrom(input: ByteArray): NetLuckyTurntable {
			return ProtoBufManager.instance.decode('game.net.msg.NetLuckyTurntable', input);
		}

	}
}
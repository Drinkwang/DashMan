namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetLuckyTurntableInit extends Message{
		public rewards: Array<NetGameReward> = [];

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetLuckyTurntableInit';
		}

		public static mergeFrom(input: ByteArray): NetLuckyTurntableInit {
			return ProtoBufManager.instance.decode('game.net.msg.NetLuckyTurntableInit', input);
		}

	}
}
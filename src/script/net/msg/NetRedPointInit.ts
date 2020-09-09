namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetRedPointInit extends Message{
		public mailRed?:boolean;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetRedPointInit';
		}

		public static mergeFrom(input: ByteArray): NetRedPointInit {
			return ProtoBufManager.instance.decode('game.net.msg.NetRedPointInit', input);
		}

	}
}
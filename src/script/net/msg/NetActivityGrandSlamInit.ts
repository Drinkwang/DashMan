namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivityGrandSlamInit extends Message{
		public ags:NetActivityGrandSlam;
		public records: Array<NetActivityGrandSlamRecord> = [];

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivityGrandSlamInit';
		}

		public static mergeFrom(input: ByteArray): NetActivityGrandSlamInit {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivityGrandSlamInit', input);
		}

	}
}
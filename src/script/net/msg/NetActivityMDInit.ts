namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivityMDInit extends Message{
		public amd:NetActivityMD;
		public isReset?:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivityMDInit';
		}

		public static mergeFrom(input: ByteArray): NetActivityMDInit {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivityMDInit', input);
		}

	}
}
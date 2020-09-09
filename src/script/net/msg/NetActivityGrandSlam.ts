namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivityGrandSlam extends Message{
		public reCount:number;
		public loCount:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivityGrandSlam';
		}

		public static mergeFrom(input: ByteArray): NetActivityGrandSlam {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivityGrandSlam', input);
		}

	}
}
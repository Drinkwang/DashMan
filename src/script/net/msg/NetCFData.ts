namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetCFData extends Message{
		public cfs: Array<NetCloseFunc> = [];

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetCFData';
		}

		public static mergeFrom(input: ByteArray): NetCFData {
			return ProtoBufManager.instance.decode('game.net.msg.NetCFData', input);
		}

	}
}
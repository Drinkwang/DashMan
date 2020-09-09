namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetVipData extends Message{
		public cfs: Array<NetCloseFunc> = [];
		public isNewVip?:boolean;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetVipData';
		}

		public static mergeFrom(input: ByteArray): NetVipData {
			return ProtoBufManager.instance.decode('game.net.msg.NetVipData', input);
		}

	}
}
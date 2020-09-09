namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActBuyuDuobaoInit extends Message{
		public duobaoCounts: Array<NetBuyuDuobaoCount> = [];
		public duobaoTasks: Array<NetActBuyuDuobaoTask> = [];

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActBuyuDuobaoInit';
		}

		public static mergeFrom(input: ByteArray): NetActBuyuDuobaoInit {
			return ProtoBufManager.instance.decode('game.net.msg.NetActBuyuDuobaoInit', input);
		}

	}
}
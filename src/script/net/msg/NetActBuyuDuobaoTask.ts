namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActBuyuDuobaoTask extends Message{
		public taskId:number;
		public state:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActBuyuDuobaoTask';
		}

		public static mergeFrom(input: ByteArray): NetActBuyuDuobaoTask {
			return ProtoBufManager.instance.decode('game.net.msg.NetActBuyuDuobaoTask', input);
		}

	}
}
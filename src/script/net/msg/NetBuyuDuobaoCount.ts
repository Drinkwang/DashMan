namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetBuyuDuobaoCount extends Message{
		public fieldId:number;
		public dayCount:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetBuyuDuobaoCount';
		}

		public static mergeFrom(input: ByteArray): NetBuyuDuobaoCount {
			return ProtoBufManager.instance.decode('game.net.msg.NetBuyuDuobaoCount', input);
		}

	}
}
namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetTriple extends Message{
		public userId?:number;
		public buyGift?:number;
		public consumCoin?:number;
		public consumGain?:number;
		public vipGain?:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetTriple';
		}

		public static mergeFrom(input: ByteArray): NetTriple {
			return ProtoBufManager.instance.decode('game.net.msg.NetTriple', input);
		}

	}
}
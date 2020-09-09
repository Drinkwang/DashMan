namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetDoleMoneyInit extends Message{
		public doleMoney?:NetDoleMoney;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetDoleMoneyInit';
		}

		public static mergeFrom(input: ByteArray): NetDoleMoneyInit {
			return ProtoBufManager.instance.decode('game.net.msg.NetDoleMoneyInit', input);
		}

	}
}
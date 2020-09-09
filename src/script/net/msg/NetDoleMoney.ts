namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetDoleMoney extends Message{
		public userId:number;
		public count:number;
		public time:number;
		public remainTime:number;
		public state:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetDoleMoney';
		}

		public static mergeFrom(input: ByteArray): NetDoleMoney {
			return ProtoBufManager.instance.decode('game.net.msg.NetDoleMoney', input);
		}

	}
}
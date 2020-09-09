namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetACRecord extends Message{
		public rank:number;
		public rds: Array<NetGameReward> = [];
		public time:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetACRecord';
		}

		public static mergeFrom(input: ByteArray): NetACRecord {
			return ProtoBufManager.instance.decode('game.net.msg.NetACRecord', input);
		}

	}
}
namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetMatchRecord extends Message{
		public rank:number;
		public time:number;
		public rds: Array<NetGameReward> = [];
		public isGet?:boolean;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetMatchRecord';
		}

		public static mergeFrom(input: ByteArray): NetMatchRecord {
			return ProtoBufManager.instance.decode('game.net.msg.NetMatchRecord', input);
		}

	}
}
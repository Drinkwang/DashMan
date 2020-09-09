namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetCommon extends Message{
		public rewards: Array<NetReward> = [];
		public gameRewards: Array<NetGameReward> = [];
		public doleMoney?:NetDoleMoney;
		public value1?:string;
		public value2?:string;
		public value3?:string;
		public privilege?:NetPrivilege;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetCommon';
		}

		public static mergeFrom(input: ByteArray): NetCommon {
			return ProtoBufManager.instance.decode('game.net.msg.NetCommon', input);
		}

	}
}
namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivityZhaDanInit extends Message{
		public value?:number;
		public rewards: Array<NetGameReward> = [];
		public activityZhaDanRecordList: Array<NetActivityZhaDanRecord> = [];

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivityZhaDanInit';
		}

		public static mergeFrom(input: ByteArray): NetActivityZhaDanInit {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivityZhaDanInit', input);
		}

	}
}
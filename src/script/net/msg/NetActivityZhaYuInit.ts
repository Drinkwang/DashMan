namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivityZhaYuInit extends Message{
		public activityZhaYu?:NetActivityZhaYu;
		public num?:number;
		public rewards: Array<NetGameReward> = [];
		public activityZhaYuList: Array<NetActivityZhaYu> = [];

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivityZhaYuInit';
		}

		public static mergeFrom(input: ByteArray): NetActivityZhaYuInit {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivityZhaYuInit', input);
		}

	}
}
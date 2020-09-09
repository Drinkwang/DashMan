namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetGuideTaskGain extends Message{
		public taskId:number;
		public rds: Array<NetGameReward> = [];

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetGuideTaskGain';
		}

		public static mergeFrom(input: ByteArray): NetGuideTaskGain {
			return ProtoBufManager.instance.decode('game.net.msg.NetGuideTaskGain', input);
		}

	}
}
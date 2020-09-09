namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivityDouble11Init extends Message{
		public buyCount:number;
		public giftId:number;
		public rewards: Array<NetGameReward> = [];
		public num?:number;
		public changeCount:number;
		public buyState:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivityDouble11Init';
		}

		public static mergeFrom(input: ByteArray): NetActivityDouble11Init {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivityDouble11Init', input);
		}

	}
}
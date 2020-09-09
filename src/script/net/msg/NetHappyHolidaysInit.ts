namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetHappyHolidaysInit extends Message{
		public buyCount:number;
		public buyLimit?:number;
		public price?:number;
		public giftItems: Array<NetGameReward> = [];
		public ranks:NetRank;
		public selfMaterials:string;
		public endTime:number;
		public rewards: Array<NetGameReward> = [];

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetHappyHolidaysInit';
		}

		public static mergeFrom(input: ByteArray): NetHappyHolidaysInit {
			return ProtoBufManager.instance.decode('game.net.msg.NetHappyHolidaysInit', input);
		}

	}
}
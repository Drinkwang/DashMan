namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivityLuckyLottery extends Message{
		public userId:number;
		public buyCount:number;
		public lotteryRecord?:string;
		public isCanLottery:number;
		public lotteryPos?:string;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivityLuckyLottery';
		}

		public static mergeFrom(input: ByteArray): NetActivityLuckyLottery {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivityLuckyLottery', input);
		}

	}
}
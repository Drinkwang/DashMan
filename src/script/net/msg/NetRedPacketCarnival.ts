namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetRedPacketCarnival extends Message{
		public userId:number;
		public firstLottery:number;
		public amount:number;
		public countRecord?:string;
		public totalRecord?:string;
		public isRechargeToday:number;
		public exchangeTimes?:string;
		public hasReport:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetRedPacketCarnival';
		}

		public static mergeFrom(input: ByteArray): NetRedPacketCarnival {
			return ProtoBufManager.instance.decode('game.net.msg.NetRedPacketCarnival', input);
		}

	}
}
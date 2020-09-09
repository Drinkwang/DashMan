namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetGoldMonthCard extends Message{
		public userId:number;
		public monthEndTime?:number;
		public isGet:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetGoldMonthCard';
		}

		public static mergeFrom(input: ByteArray): NetGoldMonthCard {
			return ProtoBufManager.instance.decode('game.net.msg.NetGoldMonthCard', input);
		}

	}
}
namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetMonthCard extends Message{
		public userId:number;
		public weekEndTime:number;
		public monthEndTime?:number;
		public isGet:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetMonthCard';
		}

		public static mergeFrom(input: ByteArray): NetMonthCard {
			return ProtoBufManager.instance.decode('game.net.msg.NetMonthCard', input);
		}

	}
}
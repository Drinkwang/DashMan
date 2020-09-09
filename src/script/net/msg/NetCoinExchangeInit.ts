namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetCoinExchangeInit extends Message{
		public money?:number;
		public dbCoin?:number;
		public items: Array<NetItem> = [];
		public month?:NetGoldMonthCard;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetCoinExchangeInit';
		}

		public static mergeFrom(input: ByteArray): NetCoinExchangeInit {
			return ProtoBufManager.instance.decode('game.net.msg.NetCoinExchangeInit', input);
		}

	}
}
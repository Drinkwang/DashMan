namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetDDZChuangGuanInit extends Message{
		public chuangguanExchangeList: Array<NetChuangguanExchange> = [];
		public dDZChuangGuan?:NetDDZChuangGuan;
		public value1?:number;
		public gameRewardList: Array<NetGameReward> = [];
		public value2?:number;
		public value3?:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetDDZChuangGuanInit';
		}

		public static mergeFrom(input: ByteArray): NetDDZChuangGuanInit {
			return ProtoBufManager.instance.decode('game.net.msg.NetDDZChuangGuanInit', input);
		}

	}
}
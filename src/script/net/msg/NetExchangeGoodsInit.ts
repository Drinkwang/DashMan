namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetExchangeGoodsInit extends Message{
		public exchangeGoodsList: Array<NetExchangeGoods> = [];
		public exchangeInfoRecordList: Array<NetExchangeInfoRecord> = [];
		public exchangePersonInfo?:NetExchangePersonInfo;
		public exchangeRecordList: Array<NetExchangeRecord> = [];
		public value?:number;
		public gameRewardList: Array<NetGameReward> = [];
		public goods?:NetGoods;
		public value1?:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetExchangeGoodsInit';
		}

		public static mergeFrom(input: ByteArray): NetExchangeGoodsInit {
			return ProtoBufManager.instance.decode('game.net.msg.NetExchangeGoodsInit', input);
		}

	}
}
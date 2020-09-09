namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetExchangeGoods extends Message{
		public id:number;
		public needItem:string;
		public exchangeItem:string;
		public title:string;
		public icon:string;
		public exchangeNum:number;
		public totalNum:number;
		public isSell:number;
		public type:number;
		public count:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetExchangeGoods';
		}

		public static mergeFrom(input: ByteArray): NetExchangeGoods {
			return ProtoBufManager.instance.decode('game.net.msg.NetExchangeGoods', input);
		}

	}
}
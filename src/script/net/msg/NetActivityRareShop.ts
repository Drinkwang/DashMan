namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivityRareShop extends Message{
		public userId:number;
		public rewards:string;
		public totalCount:number;
		public targetCount:number;
		public refreshTime:number;
		public wholeCount:number;
		public exchangeRecord?:string;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivityRareShop';
		}

		public static mergeFrom(input: ByteArray): NetActivityRareShop {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivityRareShop', input);
		}

	}
}
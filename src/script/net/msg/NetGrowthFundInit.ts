namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetGrowthFundInit extends Message{
		public buyState:number;
		public getDays?:string;
		public curDay?:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetGrowthFundInit';
		}

		public static mergeFrom(input: ByteArray): NetGrowthFundInit {
			return ProtoBufManager.instance.decode('game.net.msg.NetGrowthFundInit', input);
		}

	}
}
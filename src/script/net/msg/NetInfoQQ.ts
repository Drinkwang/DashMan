namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetInfoQQ extends Message{
		public userName?:string;
		public headUrl?:string;
		public isYellowVip?:number;
		public isYellowYearVip?:number;
		public isYellowHighVip?:number;
		public yellowVipLevel?:number;
		public isBlueVip?:number;
		public isBlueYearVip?:number;
		public isSuperBlueVip?:number;
		public isExpandBlueVip?:number;
		public blueVipLevel?:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetInfoQQ';
		}

		public static mergeFrom(input: ByteArray): NetInfoQQ {
			return ProtoBufManager.instance.decode('game.net.msg.NetInfoQQ', input);
		}

	}
}
namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetUser extends Message{
		public userId:number;
		public name:string;
		public headUrl:string;
		public gender:number;
		public dbCoin?:number;
		public money:number;
		public diamond:number;
		public onlineTime:number;
		public validate:number;
		public income:number;
		public luckyTicket:number;
		public createTime?:number;
		public vipExp:number;
		public comMakeUp:number;
		public guideStep?:number;
		public firstRecharge?:number;
		public anteIndex?:number;
		public infoQQ?:NetInfoQQ;
		public theme?:string;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetUser';
		}

		public static mergeFrom(input: ByteArray): NetUser {
			return ProtoBufManager.instance.decode('game.net.msg.NetUser', input);
		}

	}
}
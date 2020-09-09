namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetMail extends Message{
		public id:number;
		public userId:number;
		public fromUid:number;
		public fromName:string;
		public attachment:number;
		public state:number;
		public subject:string;
		public mailType:number;
		public content:string;
		public rds: Array<NetGameReward> = [];
		public time:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetMail';
		}

		public static mergeFrom(input: ByteArray): NetMail {
			return ProtoBufManager.instance.decode('game.net.msg.NetMail', input);
		}

	}
}
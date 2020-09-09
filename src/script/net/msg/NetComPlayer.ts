namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetComPlayer extends Message{
		public userId:number;
		public name:string;
		public headUrl:string;
		public gender?:number;
		public money?:number;
		public diamond?:number;
		public createTime?:number;
		public vipExp?:number;
		public infoQQ?:NetInfoQQ;
		public extraCom?:NetCommon;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetComPlayer';
		}

		public static mergeFrom(input: ByteArray): NetComPlayer {
			return ProtoBufManager.instance.decode('game.net.msg.NetComPlayer', input);
		}

	}
}
namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetMatchWeek extends Message{
		public date?:number;
		public integral:number;
		public info?:NetInfoQQ;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetMatchWeek';
		}

		public static mergeFrom(input: ByteArray): NetMatchWeek {
			return ProtoBufManager.instance.decode('game.net.msg.NetMatchWeek', input);
		}

	}
}
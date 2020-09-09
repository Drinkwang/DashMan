namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetMatchWeeks extends Message{
		public weeks: Array<NetMatchWeek> = [];

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetMatchWeeks';
		}

		public static mergeFrom(input: ByteArray): NetMatchWeeks {
			return ProtoBufManager.instance.decode('game.net.msg.NetMatchWeeks', input);
		}

	}
}
namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetGameCheck extends Message{
		public status:number;
		public startTime?:string;
		public endTime?:string;
		public gameInfo?:NetGameInfo;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetGameCheck';
		}

		public static mergeFrom(input: ByteArray): NetGameCheck {
			return ProtoBufManager.instance.decode('game.net.msg.NetGameCheck', input);
		}

	}
}
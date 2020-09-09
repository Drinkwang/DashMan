namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetGameEntry extends Message{
		public status:number;
		public url?:string;
		public startTime?:string;
		public endTime?:string;
		public oldGameName?:string;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetGameEntry';
		}

		public static mergeFrom(input: ByteArray): NetGameEntry {
			return ProtoBufManager.instance.decode('game.net.msg.NetGameEntry', input);
		}

	}
}
namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivityZhaDanRecord extends Message{
		public userId:number;
		public money:number;
		public userName?:string;
		public vipLv?:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivityZhaDanRecord';
		}

		public static mergeFrom(input: ByteArray): NetActivityZhaDanRecord {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivityZhaDanRecord', input);
		}

	}
}
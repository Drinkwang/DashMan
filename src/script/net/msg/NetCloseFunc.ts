namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetCloseFunc extends Message{
		public id:number;
		public type:number;
		public funcId:number;
		public subId?:number;
		public oper:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetCloseFunc';
		}

		public static mergeFrom(input: ByteArray): NetCloseFunc {
			return ProtoBufManager.instance.decode('game.net.msg.NetCloseFunc', input);
		}

	}
}
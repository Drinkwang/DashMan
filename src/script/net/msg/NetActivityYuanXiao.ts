namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivityYuanXiao extends Message{
		public cfgId:number;
		public dayCount:number;
		public totalCount:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivityYuanXiao';
		}

		public static mergeFrom(input: ByteArray): NetActivityYuanXiao {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivityYuanXiao', input);
		}

	}
}
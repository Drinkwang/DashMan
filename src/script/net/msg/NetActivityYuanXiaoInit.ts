namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivityYuanXiaoInit extends Message{
		public infos: Array<NetActivityYuanXiao> = [];

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivityYuanXiaoInit';
		}

		public static mergeFrom(input: ByteArray): NetActivityYuanXiaoInit {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivityYuanXiaoInit', input);
		}

	}
}
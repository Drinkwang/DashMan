namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivityBuYuInit extends Message{
		public activityBuYu?:NetActivityBuYu;
		public num?:number;
		public num1?:number;
		public activityBuYuList: Array<NetActivityBuYu> = [];

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivityBuYuInit';
		}

		public static mergeFrom(input: ByteArray): NetActivityBuYuInit {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivityBuYuInit', input);
		}

	}
}
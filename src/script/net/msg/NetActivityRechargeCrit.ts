namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivityRechargeCrit extends Message{
		public id:number;
		public count:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivityRechargeCrit';
		}

		public static mergeFrom(input: ByteArray): NetActivityRechargeCrit {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivityRechargeCrit', input);
		}

	}
}
namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivityTimePack extends Message{
		public leftCount?:number;
		public rightCount?:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivityTimePack';
		}

		public static mergeFrom(input: ByteArray): NetActivityTimePack {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivityTimePack', input);
		}

	}
}
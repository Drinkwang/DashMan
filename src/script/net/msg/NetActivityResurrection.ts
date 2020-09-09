namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivityResurrection extends Message{
		public isBuy:boolean;
		public endTime:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivityResurrection';
		}

		public static mergeFrom(input: ByteArray): NetActivityResurrection {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivityResurrection', input);
		}

	}
}
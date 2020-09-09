namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetItemExtend extends Message{
		public id:number;
		public type:number;
		public num:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetItemExtend';
		}

		public static mergeFrom(input: ByteArray): NetItemExtend {
			return ProtoBufManager.instance.decode('game.net.msg.NetItemExtend', input);
		}

	}
}
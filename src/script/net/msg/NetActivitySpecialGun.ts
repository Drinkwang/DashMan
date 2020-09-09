namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivitySpecialGun extends Message{
		public gun:boolean;
		public lottery:number;
		public integral:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivitySpecialGun';
		}

		public static mergeFrom(input: ByteArray): NetActivitySpecialGun {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivitySpecialGun', input);
		}

	}
}
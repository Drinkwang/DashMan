namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetWordFilter extends Message{
		public wordOpen:number;
		public wordMode:number;
		public singleNum:number;
		public words?:string;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetWordFilter';
		}

		public static mergeFrom(input: ByteArray): NetWordFilter {
			return ProtoBufManager.instance.decode('game.net.msg.NetWordFilter', input);
		}

	}
}
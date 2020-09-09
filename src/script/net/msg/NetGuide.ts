namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetGuide extends Message{
		public hallGuide?:boolean;
		public gameGuide?:boolean;
		public point?:boolean;
		public guideDone?:boolean;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetGuide';
		}

		public static mergeFrom(input: ByteArray): NetGuide {
			return ProtoBufManager.instance.decode('game.net.msg.NetGuide', input);
		}

	}
}
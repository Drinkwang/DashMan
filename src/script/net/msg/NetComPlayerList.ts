namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetComPlayerList extends Message{
		public exInfo?:string;
		public playerList: Array<NetComPlayer> = [];

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetComPlayerList';
		}

		public static mergeFrom(input: ByteArray): NetComPlayerList {
			return ProtoBufManager.instance.decode('game.net.msg.NetComPlayerList', input);
		}

	}
}
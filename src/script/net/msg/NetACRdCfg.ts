namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetACRdCfg extends Message{
		public rank:string;
		public rd:string;
		public url:string;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetACRdCfg';
		}

		public static mergeFrom(input: ByteArray): NetACRdCfg {
			return ProtoBufManager.instance.decode('game.net.msg.NetACRdCfg', input);
		}

	}
}
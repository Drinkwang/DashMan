namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetRankItem extends Message{
		public userId:number;
		public userName:string;
		public vipLv:number;
		public value:number;
		public headUrl:string;
		public value2?:number;
		public infoQQ?:NetInfoQQ;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetRankItem';
		}

		public static mergeFrom(input: ByteArray): NetRankItem {
			return ProtoBufManager.instance.decode('game.net.msg.NetRankItem', input);
		}

	}
}
namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetDollResult extends Message{
		public freeCount?:number;
		public totalCount?:number;
		public id?:number;
		public cost?:number;
		public rds: Array<NetGameReward> = [];
		public oldGameName?:string;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetDollResult';
		}

		public static mergeFrom(input: ByteArray): NetDollResult {
			return ProtoBufManager.instance.decode('game.net.msg.NetDollResult', input);
		}

	}
}
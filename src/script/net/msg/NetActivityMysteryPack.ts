namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivityMysteryPack extends Message{
		public id:number;
		public showIdx:number;
		public packName?:string;
		public items: Array<NetGameReward> = [];
		public cost?:NetGameReward;
		public state:number;
		public icon?:string;
		public count:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivityMysteryPack';
		}

		public static mergeFrom(input: ByteArray): NetActivityMysteryPack {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivityMysteryPack', input);
		}

	}
}
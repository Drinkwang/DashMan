namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivtyMysteryPack extends Message{
		public id:number;
		public showIdx:number;
		public items:string;
		public cost:string;
		public state:number;
		public icon:string;
		public count:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivtyMysteryPack';
		}

		public static mergeFrom(input: ByteArray): NetActivtyMysteryPack {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivtyMysteryPack', input);
		}

	}
}
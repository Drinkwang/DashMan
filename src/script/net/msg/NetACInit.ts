namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetACInit extends Message{
		public ranks: Array<NetACRank> = [];
		public days:number;
		public points?:number;
		public vipAdd?:number;
		public gpAdd?:number;
		public fishNum?:number;
		public rank:number;
		public cfgs: Array<NetACRdCfg> = [];
		public act:NetActivity;
		public gp?:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetACInit';
		}

		public static mergeFrom(input: ByteArray): NetACInit {
			return ProtoBufManager.instance.decode('game.net.msg.NetACInit', input);
		}

	}
}
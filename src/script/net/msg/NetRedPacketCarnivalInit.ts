namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetRedPacketCarnivalInit extends Message{
		public redPacketCarnival?:NetRedPacketCarnival;
		public index?:number;
		public nodeId?:number;
		public turntableRecordList: Array<NetRedPacketCarnivalTurntableRecord> = [];
		public records: Array<NetRedPacketCarnivalExchangeRecord> = [];
		public exchangeId?:number;
		public value?:number;
		public isTurnTableOpen?:number;
		public jdCardId?:string;
		public jdCardPws?:string;
		public turntableSelfRecordList: Array<NetRedPacketCarnivalTurntableSelf> = [];
		public errorCode?:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetRedPacketCarnivalInit';
		}

		public static mergeFrom(input: ByteArray): NetRedPacketCarnivalInit {
			return ProtoBufManager.instance.decode('game.net.msg.NetRedPacketCarnivalInit', input);
		}

	}
}
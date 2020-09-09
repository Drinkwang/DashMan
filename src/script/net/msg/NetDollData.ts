namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetDollData extends Message{
		public money1:number;
		public time1:number;
		public money2:number;
		public time2:number;
		public money3:number;
		public time3:number;
		public vipCount:string;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetDollData';
		}

		public static mergeFrom(input: ByteArray): NetDollData {
			return ProtoBufManager.instance.decode('game.net.msg.NetDollData', input);
		}

	}
}
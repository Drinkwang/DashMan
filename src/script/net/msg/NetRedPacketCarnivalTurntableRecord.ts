namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetRedPacketCarnivalTurntableRecord extends Message{
		public userId:number;
		public rewardId:number;
		public time:number;
		public userName?:string;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetRedPacketCarnivalTurntableRecord';
		}

		public static mergeFrom(input: ByteArray): NetRedPacketCarnivalTurntableRecord {
			return ProtoBufManager.instance.decode('game.net.msg.NetRedPacketCarnivalTurntableRecord', input);
		}

	}
}
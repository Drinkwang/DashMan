namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetRedPacketCarnivalTurntableSelf extends Message{
		public id:number;
		public userId:number;
		public rewardId:number;
		public userOrderId?:string;
		public time:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetRedPacketCarnivalTurntableSelf';
		}

		public static mergeFrom(input: ByteArray): NetRedPacketCarnivalTurntableSelf {
			return ProtoBufManager.instance.decode('game.net.msg.NetRedPacketCarnivalTurntableSelf', input);
		}

	}
}
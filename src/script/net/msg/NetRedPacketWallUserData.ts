namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetRedPacketWallUserData extends Message{
		public userId:number;
		public leftOpenRedPacketTimes:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetRedPacketWallUserData';
		}

		public static mergeFrom(input: ByteArray): NetRedPacketWallUserData {
			return ProtoBufManager.instance.decode('game.net.msg.NetRedPacketWallUserData', input);
		}

	}
}
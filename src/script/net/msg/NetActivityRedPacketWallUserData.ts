namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivityRedPacketWallUserData extends Message{
		public userId:number;
		public leftOpenRedPacketTimes:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivityRedPacketWallUserData';
		}

		public static mergeFrom(input: ByteArray): NetActivityRedPacketWallUserData {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivityRedPacketWallUserData', input);
		}

	}
}
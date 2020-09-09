namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivityGrandSlamRecord extends Message{
		public vipLv:number;
		public name:string;
		public reward?:NetGameReward;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivityGrandSlamRecord';
		}

		public static mergeFrom(input: ByteArray): NetActivityGrandSlamRecord {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivityGrandSlamRecord', input);
		}

	}
}
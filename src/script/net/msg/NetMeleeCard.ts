namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetMeleeCard extends Message{
		public userId:number;
		public endTime?:number;
		public isGet:number;
		public activityTime?:number;
		public isPost?:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetMeleeCard';
		}

		public static mergeFrom(input: ByteArray): NetMeleeCard {
			return ProtoBufManager.instance.decode('game.net.msg.NetMeleeCard', input);
		}

	}
}
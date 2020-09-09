namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetBlueVip extends Message{
		public userId:number;
		public newHand:number;
		public levels?:string;
		public dayState:number;
		public yearState:number;
		public superState:number;
		public yellowNewHand:number;
		public yellowLevels?:string;
		public yellowDayState:number;
		public yellowYearState:number;
		public yellowSuperState:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetBlueVip';
		}

		public static mergeFrom(input: ByteArray): NetBlueVip {
			return ProtoBufManager.instance.decode('game.net.msg.NetBlueVip', input);
		}

	}
}
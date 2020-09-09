namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivityCondition extends Message{
		public id:number;
		public activityId:number;
		public index:number;
		public conditionValue:number;
		public conditionValue1:string;
		public conditionValue2:string;
		public conditionValue3?:string;
		public conditionValue4?:string;
		public conditionValue5?:string;
		public value?:string;
		public rewards:string;
		public remarks:string;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivityCondition';
		}

		public static mergeFrom(input: ByteArray): NetActivityCondition {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivityCondition', input);
		}

	}
}
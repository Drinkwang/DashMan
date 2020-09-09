namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivity extends Message{
		public id:number;
		public type:number;
		public title:string;
		public index?:number;
		public forever?:number;
		public startTime?:number;
		public endTime?:number;
		public conditionValue?:string;
		public cnds: Array<NetActivityCondition> = [];

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivity';
		}

		public static mergeFrom(input: ByteArray): NetActivity {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivity', input);
		}

	}
}
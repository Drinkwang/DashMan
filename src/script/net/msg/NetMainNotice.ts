namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetMainNotice extends Message{
		public id:number;
		public noticeType?:number;
		public servers?:string;
		public skipId?:number;
		public title?:string;
		public subTitle?:string;
		public content?:string;
		public stime?:number;
		public etime?:number;
		public state?:number;
		public time:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetMainNotice';
		}

		public static mergeFrom(input: ByteArray): NetMainNotice {
			return ProtoBufManager.instance.decode('game.net.msg.NetMainNotice', input);
		}

	}
}
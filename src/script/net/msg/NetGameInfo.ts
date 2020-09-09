namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetGameInfo extends Message{
		public id:number;
		public func?:number;
		public index:number;
		public icon:string;
		public tagType?:number;
		public tagAnim?:string;
		public type?:number;
		public coin?:number;
		public coinBase?:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetGameInfo';
		}

		public static mergeFrom(input: ByteArray): NetGameInfo {
			return ProtoBufManager.instance.decode('game.net.msg.NetGameInfo', input);
		}

	}
}
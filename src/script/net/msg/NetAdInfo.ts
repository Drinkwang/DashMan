namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetAdInfo extends Message{
		public id:number;
		public type:number;
		public value:number;
		public func:number;
		public icon:string;
		public url?:string;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetAdInfo';
		}

		public static mergeFrom(input: ByteArray): NetAdInfo {
			return ProtoBufManager.instance.decode('game.net.msg.NetAdInfo', input);
		}

	}
}
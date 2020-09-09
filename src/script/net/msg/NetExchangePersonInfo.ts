namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetExchangePersonInfo extends Message{
		public userId:number;
		public name:string;
		public qq:string;
		public phoneNum:string;
		public postalCode:string;
		public address:string;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetExchangePersonInfo';
		}

		public static mergeFrom(input: ByteArray): NetExchangePersonInfo {
			return ProtoBufManager.instance.decode('game.net.msg.NetExchangePersonInfo', input);
		}

	}
}
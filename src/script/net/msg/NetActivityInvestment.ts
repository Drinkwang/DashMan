namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetActivityInvestment extends Message{
		public userId:number;
		public isInvestment:number;
		public getRecord:string;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetActivityInvestment';
		}

		public static mergeFrom(input: ByteArray): NetActivityInvestment {
			return ProtoBufManager.instance.decode('game.net.msg.NetActivityInvestment', input);
		}

	}
}
namespace game.net.msg{
	import Message = com.protoc.Message; 
	import ByteArray = com.utils.ByteArray; 
	import ProtoBufManager = com.protoc.ProtoBufManager; 

	export class NetHappyHolidaysCompoundRecord extends Message{
		public selfMaterials:string;
		public itemId:number;
		public num:number;
		public itemType:number;

		constructor(){
			super();
		}

		public getFullClassName(){
			return 'game.net.msg.NetHappyHolidaysCompoundRecord';
		}

		public static mergeFrom(input: ByteArray): NetHappyHolidaysCompoundRecord {
			return ProtoBufManager.instance.decode('game.net.msg.NetHappyHolidaysCompoundRecord', input);
		}

	}
}
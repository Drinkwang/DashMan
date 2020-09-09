module com.protoc {
    import ByteArray = com.utils.ByteArray;

    export class Message {
        constructor() {

        }

        public writeTo(): ByteArray {
            return ProtoBufManager.instance.encode(this);
        }
    }
}
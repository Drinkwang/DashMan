module game.net {
    import ByteArray = com.utils.ByteArray;
    import INetCodes = com.net.INetCodes;
    import Constants = game.utils.Constants;
    import NetMessage = com.net.NetMessage;
    
    export class NetCodes implements INetCodes {
        private static tmpByteArray:ByteArray = new ByteArray();

        private _index: number = 0;
        private _key;
        private encrypt:ByteArray = new ByteArray();
        private dt:ByteArray = new ByteArray();

        constructor() {

        }

        public encode(msg: NetMessage): ByteArray {
            var bodylen: number = msg.data == null ? 0 : msg.data.length;

            var encrypt: ByteArray = this.encrypt;
            encrypt.clear();
            // encrypt.writeBytes(NetCodes.writeInt64(msg.userId));
            encrypt.writeShort(msg.cmd);

            if (this._index >= Constants.SHORT_MAX_VALUE) {
                this._index = 0;
            }

            encrypt.writeShort(++this._index);
            if (bodylen > 0) {
                encrypt.writeBytes(msg.data, 0, bodylen);
            }

            var dt: ByteArray = this.dt;
            if (this._key) {
                this._key.encrypt(encrypt);
            }
            dt.clear();
            dt.writeInt(encrypt.length);
            dt.writeBytes(encrypt, 0, encrypt.length);
            return dt;
        }

        // {total{4} | cmd(2) | ret(2) | index(2) | body}
        public decode(bytes: ByteArray): NetMessage {
            if (this._key) {
                this._key.decrypt(bytes);
            }
            var msg: NetMessage = NetMessage.getRevMsg();
            bytes.position = 0;
            msg.cmd = bytes.readShort();
            msg.ret = bytes.readShort();
            msg.index = bytes.readShort();
            var tmpbodylen: number = bytes.bytesAvailable;
            if (tmpbodylen > 0) {
                msg.data = new ByteArray();
                bytes.readBytes(msg.data, 0, tmpbodylen);
            }
            return msg;
        }

        public getkey() {
            return this._key;
        }

        public setKey(value) {
            this._key = value;
        }

        public setIndex(value: number) {
            this._index = value;
        }

        public getIndex(): number {
            return this._index;
        }

        public static writeInt64(bigInt: number): ByteArray {
            const zeros: string = "00000000";
            var bytes: ByteArray = this.tmpByteArray;
            bytes.clear();
            var str: string = bigInt.toString(16);
            str = zeros.substr(0, 16 - str.length) + str;
            bytes.writeUnsignedInt(parseInt(str.substr(0, 8), 16));
            bytes.writeUnsignedInt(parseInt(str.substr(8, 8), 16));
            bytes.position = 0;
            return bytes;
        }

        public static readInt64(bytes: ByteArray): number {
            const zeros: string = "00000000";
            var s: string = bytes.readUnsignedInt().toString(16);
            var str: string = zeros.substr(0, 8 - s.length) + s;
            s = bytes.readUnsignedInt().toString(16);
            str += zeros.substr(0, 8 - s.length) + s;
            return Number(parseInt(str, 16).toString());
        }
    }
}
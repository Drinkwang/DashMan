module com.utils {
    import Byte = laya.utils.Byte;
    import ClassUtils = laya.utils.ClassUtils;
    
    export class ByteArray extends Byte {
        _objectEncoding_;
        _position_;
        __allocated_;
        _data_;
        _littleEndian_;
        _byteView_;
        _strTable;
        _objTable;
        _traitsTable;

        public static UNDEFINED_TYPE: number = 0;
        public static NULL_TYPE: number = 1;
        public static FALSE_TYPE: number = 2;
        public static TRUE_TYPE: number = 3;
        public static INTEGER_TYPE: number = 4;
        public static DOUBLE_TYPE: number = 5;
        public static STRING_TYPE: number = 6;
        public static XML_TYPE: number = 7;
        public static DATE_TYPE: number = 8;
        public static ARRAY_TYPE: number = 9;
        public static OBJECT_TYPE: number = 10;
        public static AVMPLUSXML_TYPE: number = 11;
        public static BYTEARRAY_TYPE: number = 12;

        public static EMPTY_STRING: string = "";

        /**
         * Internal use only.
         * @exclude
         */
        public static UINT29_MASK: number = 0x1FFFFFFF; // 2^29 - 1

        /**
         * The maximum value for an <code>int</code> that will avoid promotion to an
         * ActionScript Number when sent via AMF 3 is 2<sup>28</sup> - 1, or <code>0x0FFFFFFF</code>.
         */
        public static INT28_MAX_VALUE: number = 0x0FFFFFFF; // 2^28 - 1

        /**
         * The minimum value for an <code>int</code> that will avoid promotion to an
         * ActionScript Number when sent via AMF 3 is -2<sup>28</sup> or <code>0xF0000000</code>.
         */
        public static INT28_MIN_VALUE: number = -268435456; // -2^28 in 2^29 scheme

        constructor() {
            super();
            this._length = 0;
            this._objectEncoding_ = 0;
            this._position_ = 0;
            this.__allocated_ = 8;
            this._data_ = null;
            this._littleEndian_ = false;
            this._byteView_ = null;
            this._strTable = null;
            this._objTable = null;
            this._traitsTable = null;
            this.___resizeBuffers(this.__allocated_);
        }

        public get bytesAvailable() {
            return this.length - this._position_;
        }

        public get endian(): string {
            return this._littleEndian_ ? ByteArray.LITTLE_ENDIAN : ByteArray.BIG_ENDIAN;
        }

        public set endian(endianStr: string) {
            this._littleEndian_ = (endianStr == ByteArray.LITTLE_ENDIAN);
        }

        public set length(value: number) {
            this.___resizeBuffers(this.__allocated_ = value);
            this._length = value;
        }

        public get length() {
            return this._length;
        }

        public get position() {
            return this._position_;
        }

        public set position(pos: number) {
            if (pos < this._length)
                this._position_ = pos < 0 ? 0 : pos;
            else {
                this._position_ = pos;
                this.length = pos;
            }
        }

        public clear(): void {
            this._strTable = [];
            this._objTable = [];
            this._traitsTable = [];
            this._position_ = 0;
            this.length = 0;
        }

        public ensureWrite(lengthToEnsure: number): void {
            if (this._length < lengthToEnsure)
                this.length = lengthToEnsure;
        }

        public readBoolean(): boolean {
            return this.readByte() != 0;
        }

        public readByte(): number {
            return this._data_.getInt8(this._position_++);
        }

        public readBytes(bytes: ByteArray, offset: number = 0, length: number = 0) {
            if (offset < 0 || length < 0) {
                throw "Read error - Out of bounds";
            }

            if (length == 0) length = this._length - this._position_;

            bytes.ensureWrite(offset + length);
            bytes._byteView_.set(this._byteView_.subarray(this._position_, this._position_ + length), offset);
            bytes.position = offset;

            this._position_ += length;
            if (bytes.position + length > bytes.length) bytes.length = bytes.position + length;
        }

        public readDouble(): number {
            var double: number = this._data_.getFloat64(this._position_, this._littleEndian_);
            this._position_ += 8;
            return double;
        }

        public readFloat(): number {
            var float: number = this._data_.getFloat32(this._position_, this._littleEndian_);
            this._position_ += 4;
            return float;
        }

        private readFullBytes(bytes: any, pos: number, len: number): void {
            this.ensureWrite(len);
            for (var i = pos; i < pos + len; i++) {
                this._data_.setInt8(this._position_++, bytes.get(i));
            }
        }

        public readInt(): number {
            var tInt: number = this._data_.getInt32(this._position_, this._littleEndian_);
            this._position_ += 4;
            return tInt;
        }

        public readShort(): number {
            var short: number = this._data_.getInt16(this._position_, this._littleEndian_);
            this._position_ += 2;
            return short;
        }

        public readUnsignedByte(): number {
            return this._data_.getUint8(this._position_++);
        }

        public readUnsignedInt(): number {
            var uInt: number = this._data_.getUint32(this._position_, this._littleEndian_);
            this._position_ += 4;
            return parseInt(uInt.toString());
        }

        public readUnsignedShort(): number {
            var uShort: number = this._data_.getUint16(this._position_, this._littleEndian_);
            this._position_ += 2;
            return uShort;
        }

        public readUTF(): string {
            return this.readUTFBytes(this.readUnsignedShort());
        }

        public readUnicode(length: number): string {
            var value: string = "";
            var max = this._position_ + length;
            var c1, c2;
            while (this._position_ < max) {
                c2 = this._byteView_[this._position_++];
                c1 = this._byteView_[this._position_++];
                value += String.fromCharCode(c1 << 8 | c2);
            }
            return value;
        }

        public readMultiByte(length: number, charSet: string): string {
            if (charSet == "UNICODE" || charSet == "unicode") {
                return this.readUnicode(length);
            }
            return this.readUTFBytes(length);
        }

        public readUTFBytes(len: number = -1): string {
            var value: string = "";
            var max: number = this._position_ + len;
            var c: number, c2: number, c3: number;

            while (this._position_ < max) {
                c = this._data_.getUint8(this._position_++);

                if (c < 0x80) {
                    if (c != 0) {
                        value += String.fromCharCode(c);
                    }
                } else if (c < 0xE0) {
                    value += String.fromCharCode(((c & 0x3F) << 6) | (this._data_.getUint8(this._position_++) & 0x7F));
                } else if (c < 0xF0) {
                    c2 = this._data_.getUint8(this._position_++);
                    value += String.fromCharCode(((c & 0x1F) << 12) | ((c2 & 0x7F) << 6) | (this._data_.getUint8(this._position_++) & 0x7F));
                } else {
                    c2 = this._data_.getUint8(this._position_++);
                    c3 = this._data_.getUint8(this._position_++);
                    value += String.fromCharCode(((c & 0x0F) << 18) | ((c2 & 0x7F) << 12) | ((c3 << 6) & 0x7F) | (this._data_.getUint8(this._position_++) & 0x7F));
                }
            }
            return value;
        }

        public toString(): string {
            var cachePosition = this._position_;
            this._position_ = 0;
            var value: string = this.readUTFBytes(this.length);
            this._position_ = cachePosition;
            return value;
        }

        public writeBoolean(value: boolean): void {
            this.writeByte(value ? 1 : 0);
        }

        public writeByte(value: number): void {
            this.ensureWrite(this._position_ + 1);
            this._data_.setInt8(this._position_, value);
            this._position_ += 1;
        }

        public writeBytes(bytes: ByteArray, offset = 0, length = 0): void {
            if (offset < 0 || length < 0) throw "writeBytes error - Out of bounds";
            if (length == 0) length = bytes.length - offset;
            this.ensureWrite(this._position_ + length);
            this._byteView_.set(bytes._byteView_.subarray(offset, offset + length), this._position_);
            this._position_ += length;
        }

        public writeArrayBuffer(arraybuffer: any, offset = 0, length = 0): void {
            if (offset < 0 || length < 0) throw "writeBytes error - Out of bounds";
            if (length == 0) length = arraybuffer.byteLength - offset;
            this.ensureWrite(this._position_ + length);
            var uint8array = new Uint8Array(arraybuffer);
            this._byteView_.set(uint8array.subarray(offset, offset + length), this._position_);
            this._position_ += length;
        }

        public writeDouble(x: number): void {
            this.ensureWrite(this._position_ + 8);
            this._data_.setFloat64(this._position_, x, this._littleEndian_);
            this._position_ += 8;
        }

        public writeFloat(x: number): void {
            this.ensureWrite(this._position_ + 4);
            this._data_.setFloat32(this._position_, x, this._littleEndian_);
            this._position_ += 4;
        }

        public writeInt(value: number): void {
            this.ensureWrite(this._position_ + 4);
            this._data_.setInt32(this._position_, value, this._littleEndian_);
            this._position_ += 4;
        }

        public writeShort(value: number): void {
            this.ensureWrite(this._position_ + 2);
            this._data_.setInt16(this._position_, value, this._littleEndian_);
            this._position_ += 2;
        }

        public writeUnsignedInt(value: number): void {
            this.ensureWrite(this._position_ + 4);
            this._data_.setUint32(this._position_, value, this._littleEndian_);
            this._position_ += 4;
        }

        public writeUnsignedShort(value: number): void {
            this.ensureWrite(this._position_ + 2);
            this._data_.setUint16(this._position_, value, this._littleEndian_);
            this._position_ += 2;
        }

        public writeUTF(value: string): void {
            value = value + "";
            this.writeUnsignedShort(this._getUTFBytesCount(value));
            this.writeUTFBytes(value);
        }

        public writeUnicode(value: string): void {
            value = value + "";
            this.ensureWrite(this._position_ + value.length * 2);
            var c: number;
            for (var i = 0, sz = value.length; i < sz; i++) {
                c = value.charCodeAt(i);
                this._byteView_[this._position_++] = c & 0xff;
                this._byteView_[this._position_++] = c >> 8;
            }
        }

        public writeMultiByte(value: string, charSet: string): void {
            value = value + "";
            if (charSet == "UNICODE" || charSet == "unicode") {
                return this.writeUnicode(value);
            }
            this.writeUTFBytes(value);
        }

        public writeUTFBytes(value: string): void {
            value = value + "";
            this.ensureWrite(this._position_ + value.length * 4);
            for (var i = 0, sz = value.length; i < sz; i++) {
                var c: number = value.charCodeAt(i);
                if (c <= 0x7F) {
                    this.writeByte(c);
                } else if (c <= 0x7FF) {
                    this.writeByte(0xC0 | (c >> 6));
                    this.writeByte(0x80 | (c & 63));
                } else if (c <= 0xFFFF) {
                    this.writeByte(0xE0 | (c >> 12));
                    ;
                    this.writeByte(0x80 | (c >> 6) & 63);
                    ;
                    this.writeByte(0x80 | (c & 63));
                    ;
                } else {
                    this.writeByte(0xF0 | (c >> 18));
                    ;
                    this.writeByte(0x80 | (c >> 12) & 63);
                    ;
                    this.writeByte(0x80 | (c >> 6) & 63);
                    ;
                    this.writeByte(0x80 | (c & 63));
                    ;

                }
            }
            this.length = this._position_;
        }

        private __fromBytes(inBytes: any): void {
            this._byteView_ = new Uint8Array(inBytes.getData());
            this.length = this._byteView_.length;
            this.__allocated_ = this.length;
        }

        public __get(pos: number): number {
            return this._data_.getUint8(pos);
        }

        private _getUTFBytesCount(value: string): number {
            var count: number = 0;
            value = value + "";
            for (var i = 0, sz = value.length; i < sz; i++) {
                var c: number = value.charCodeAt(i);
                if (c <= 0x7F) {
                    count += 1;
                } else if (c <= 0x7FF) {
                    count += 2;
                } else if (c <= 0xFFFF) {
                    count += 3;
                } else {
                    count += 4;
                }
            }
            return count;
        }

        public _byteAt_(index: number): number {
            return this._byteView_[index];
        }

        public _byteSet_(index: number, value: any): void {
            this.ensureWrite(index + 1);
            this._byteView_[index] = value;
        }

        public uncompress(algorithm: string = "zlib"): void {
            var inflate = new Zlib.Inflate(this._byteView_);
            this._byteView_ = inflate.decompress();
            this._data_ = new DataView(this._byteView_.buffer);
            this.__allocated_ = this._length = this._byteView_.byteLength;
            this._position_ = 0;
        }

        public compress(algorithm: string = "zlib"): void {
            var deflate = new Zlib.Deflate(this._byteView_);
            this._byteView_ = deflate.compress();
            this._data_ = new DataView(this._byteView_.buffer);
            this._position_ = this.__allocated_ = this._length = this._byteView_.byteLength;
        }

        private ___resizeBuffers(len: number): void {
            try {
                var newByteView: Uint8Array = new Uint8Array(len);
                if (this._byteView_ != null) {
                    if (this._byteView_.length <= len) newByteView.set(this._byteView_);
                    else newByteView.set(this._byteView_.subarray(0, len));
                }
                this._byteView_ = newByteView;
                this._data_ = new DataView(newByteView.buffer);
            } catch (err) {
                throw "___resizeBuffer ret: " + len;
            }
        }

        public __getBuffer(): ArrayBuffer {
            this._data_.buffer.byteLength = this.length;
            return this._data_.buffer;
        }

        public __set(pos: number, v: number): void {
            this._data_.setUint8(pos, v);
        }

        public static __ofBuffer(buffer: any): ByteArray {
            var bytes: ByteArray = new ByteArray();
            bytes.length = bytes.__allocated_ = buffer.byteLength;
            bytes._data_ = new DataView(buffer);
            bytes._byteView_ = new Uint8Array(buffer);
            return bytes;
        }

        public setUint8Array(data: any): void {
            this._byteView_ = data;
            this._data_ = new DataView(data.buffer);
            this._length = data.byteLength;
            this._position_ = 0;
        }

        public readObject(): any {
            this._strTable = []
            this._objTable = [];
            this._traitsTable = [];
            return this.readObject2();
        }

        private readObject2(): any {
            var type: number = this.readByte();
            return this.readObjectValue(type);
        }

        private readObjectValue(type: number): any {
            var value: Object;
            switch (type) {
                case ByteArray.NULL_TYPE:
                    break;
                case ByteArray.STRING_TYPE:
                    value = this.__readString();
                    break;
                case ByteArray.INTEGER_TYPE:
                    value = this.readInterger();
                    break;
                case ByteArray.FALSE_TYPE:
                    value = false;
                    break;
                case ByteArray.TRUE_TYPE:
                    value = true;
                    break;
                case ByteArray.OBJECT_TYPE:
                    value = this.readScriptObject();
                    break;
                case ByteArray.ARRAY_TYPE:
                    value = this.readArray();
                    break;
                case ByteArray.DOUBLE_TYPE:
                    value = this.readDouble();
                    break;
                case ByteArray.BYTEARRAY_TYPE:
                    value = this.readByteArray();
                    break;
                default:
                    console.log("Unknown object type tag!!!" + type);
            }
            return value;
        }

        public readByteArray(): ByteArray {
            var ref: number = this.readUInt29();
            if ((ref & 1) == 0) {
                return this.getObjRef(ref >> 1) as ByteArray;
            } else {
                var len: number = (ref >> 1);
                var ba: ByteArray = new ByteArray();
                this._objTable.push(ba);
                this.readBytes(ba, 0, len);
                return ba;
            }
        }

        public readInterger(): number {
            var i: number = this.readUInt29();
            i = (i << 3) >> 3;
            return parseInt(i + "");
        }

        private getStrRef(ref: number): string {
            return this._strTable[ref];
        }

        private getObjRef(ref: number): Object {
            return this._objTable[ref];
        }

        private __readString(): string {
            var ref: number = this.readUInt29();
            if ((ref & 1) == 0) {
                return this.getStrRef(ref >> 1);
            }

            var len: number = (ref >> 1);
            if (0 == len) {
                return ByteArray.EMPTY_STRING;
            }

            var str: string = this.readUTFBytes(len);
            this._strTable.push(str);
            return str;
        }

        private readTraites(ref: number): any {
            var ti: any;
            if ((ref & 3) == 1) {
                ti = this.getTraitReference(ref >> 2);
                return ti.propoties ? ti : {obj: {}};
            } else {
                var externalizable: boolean = ((ref & 4) == 4);
                var isDynamic: boolean = ((ref & 8) == 8);
                var count: number = (ref >> 4);
                var className: string = this.__readString();
                ti = {};
                ti.className = className;
                ti.propoties = [];
                ti.dynamic = isDynamic;
                ti.externalizable = externalizable;
                if (count > 0) {
                    for (var i = 0; i < count; i++) {
                        var propName: string = this.__readString();
                        ti.propoties.push(propName);
                    }
                }

                this._traitsTable.push(ti);
                return ti;
            }
        }

        protected readScriptObject(): Object {
            var ref: number = this.readUInt29();
            if ((ref & 1) == 0) {
                return this.getObjRef(ref >> 1);
            } else {
                var objref: any = this.readTraites(ref);
                var className: string = objref.className;
                var externalizable: boolean = objref.externalizable;
                var obj: any;
                var propName: string;
                var pros: string = objref.propoties;
                if (className && className != "") {
                    var rst: any = ClassUtils.getRegClass(className);
                    if (rst) {
                        obj = new rst();
                    } else {
                        obj = {};
                    }
                } else {
                    obj = {};
                }
                this._objTable.push(obj);
                if (pros) {
                    for (var d = 0; d < pros.length; d++) {
                        obj[pros[d]] = this.readObject2();
                    }
                }
                if (objref.dynamic) {
                    for (; ;) {
                        propName = this.__readString();
                        if (propName == null || propName.length == 0) break;
                        obj[propName] = this.readObject2();
                    }
                }

                return obj;
            }
        }

        protected readArray(): any {
            var ref: number = this.readUInt29();
            if ((ref & 1) == 0) {
                return this.getObjRef(ref >> 1);
            }
            var obj: any = null;
            var count: number = (ref >> 1);

            var propName: string;
            for (; ;) {
                propName = this.__readString();
                if (propName == null || propName.length == 0) break;
                if (obj == null) {
                    obj = {};
                    this._objTable.push(obj);
                }
                obj[propName] = this.readObject2();
            }

            if (obj == null) {
                obj = [];
                this._objTable.push(obj);
                for (var i = 0; i < count; i++) {
                    obj.push(this.readObject2());
                }
            } else {
                for (var i = 0; i < count; i++) {
                    obj[i.toString()] = this.readObject2();
                }
            }

            return obj;
        }

        /**
         * AMF 3 represents smaller integers with fewer bytes using the most
         * significant bit of each byte. The worst case uses 32-bits
         * to represent a 29-bit number, which is what we would have
         * done with no compression.
         * <pre>
         * 0x00000000 - 0x0000007F : 0xxxxxxx
         * 0x00000080 - 0x00003FFF : 1xxxxxxx 0xxxxxxx
         * 0x00004000 - 0x001FFFFF : 1xxxxxxx 1xxxxxxx 0xxxxxxx
         * 0x00200000 - 0x3FFFFFFF : 1xxxxxxx 1xxxxxxx 1xxxxxxx xxxxxxxx
         * 0x40000000 - 0xFFFFFFFF : throw range exception
         * </pre>
         *
         * @return A int capable of holding an unsigned 29 bit integer.
         * @throws IOException
         * @exclude
         */
        protected readUInt29(): number {
            var value: number;
            var b: number = this.readByte() & 0xFF;
            if (b < 128) {
                return parseInt(b.toString());
            }

            value = (b & 0x7F) << 7;
            b = this.readByte() & 0xFF;
            if (b < 128) {
                return parseInt((value | b).toString());
            }

            value = (value | (b & 0x7F)) << 7;
            b = this.readByte() & 0xFF;

            if (b < 128) {
                return parseInt((value | b).toString());
            }

            value = (value | (b & 0x7F)) << 8;
            b = this.readByte() & 0xFF;

            return parseInt((value | b).toString());
        }

        public writeObject(o: any): void {
            this._strTable = [];
            this._objTable = [];
            this._traitsTable = [];
            this.writeObject2(o);
        }

        public writeObject2(o: any): void {
            if (o == null) {
                this.writeAMFNull();
                return;
            }

            var type: string = typeof (o);
            if ("string" === type) {
                this.writeAMFString(o);
            } else if ("boolean" === type) {
                this.writeAMFBoolean(o);
            } else if ("number" === type) {
                if (String(o).indexOf(".") != -1) {
                    this.writeAMFDouble(o);
                } else {
                    this.writeAMFInt(o);
                }
            } else if ("object" === type) {
                if (o instanceof Array) {
                    this.writeArray(o);
                } else if (o instanceof ByteArray) {
                    this.writeAMFByteArray(o);
                } else {
                    this.writeCustomObject(o);
                }
            }
        }

        protected writeAMFNull(): void {
            this.writeByte(ByteArray.NULL_TYPE);
        }

        protected writeAMFString(s: string): void {
            this.writeByte(ByteArray.STRING_TYPE);
            this.writeStringWithoutType(s);
        }

        protected writeStringWithoutType(s: string): void {
            if (s.length == 0) {
                this.writeUInt29(1);
                return
            }

            var ref: number = this._strTable.indexOf(s);
            if (ref >= 0) {
                this.writeUInt29(ref << 1);
            } else {
                var utflen: number = this._getUTFBytesCount(s);
                this.writeUInt29((utflen << 1) | 1);
                this.writeUTFBytes(s);
                this._strTable.push(s);
            }
        }

        protected writeAMFInt(i: number): void {
            if (i >= ByteArray.INT28_MIN_VALUE && i <= ByteArray.INT28_MAX_VALUE) {
                i = i & ByteArray.UINT29_MASK;
                this.writeByte(ByteArray.INTEGER_TYPE);
                this.writeUInt29(i);
            } else {
                this.writeAMFDouble(i);
            }
        }

        protected writeAMFDouble(d: number): void {
            this.writeByte(ByteArray.DOUBLE_TYPE);
            ;
            this.writeDouble(d);
        }

        protected writeAMFBoolean(b: boolean): void {
            if (b)
                this.writeByte(ByteArray.TRUE_TYPE);
            else
                this.writeByte(ByteArray.FALSE_TYPE);
        }

        protected writeCustomObject(o: Object): void {
            this.writeByte(ByteArray.OBJECT_TYPE);
            var refNum: number = this._objTable.indexOf(o);
            if (refNum != -1) {
                this._objTable.push(o);

                var traitsInfo: any = new Object();
                traitsInfo.className = this.getAliasByObj(o);
                traitsInfo.dynamic = false;
                traitsInfo.externalizable = false;
                traitsInfo.properties = [];

                for (var prop in o) {
                    if (o[prop] instanceof Function) continue;
                    traitsInfo.properties.push(prop);
                    traitsInfo.properties.sort();
                }

                var tRef: number = ByteArray.getTraitsInfoRef(this._traitsTable, traitsInfo);
                var count: number = traitsInfo.properties.length;

                if (tRef >= 0) {
                    this.writeUInt29((tRef << 2) | 1);
                } else {
                    this._traitsTable.push(traitsInfo);
                    this.writeUInt29(3 | (traitsInfo.externalizable ? 4 : 0) | (traitsInfo.dynamic ? 8 : 0) | (count << 4));
                    this.writeStringWithoutType(traitsInfo.className);
                    for (var i = 0; i < count; i++) {
                        this.writeStringWithoutType(traitsInfo.properties[i]);
                    }
                }

                for (var i = 0; i < count; i++) {
                    this.writeObject2(o[traitsInfo.properties[i]]);
                }
            }
        }

        public static getTraitsInfoRef(arr, ti: any): number {
            var i: number, len: number = arr.length;
            for (i = 0; i < len; i++) {
                if (this.equalsTraitsInfo(ti, arr[i])) return i;
            }

            return -1;
        }

        public static equalsTraitsInfo(ti1: any, ti2: any): boolean {
            if (ti1 == ti2) {
                return true;
            }

            if (!ti1.className === ti2._aniClassName) {
                return false;
            }

            if (ti1.properties.length != ti2.properties.length) {
                return false;
            }
            var len: number = ti1.properties.length;
            var prop: string;
            ti1.properties.sort();
            ti2.properties.sort();

            for (var i = 0; i < len; i++) {
                if (ti1.properties[i] != ti2.properties[i]) {
                    return false;
                }
            }

            return true;
        }

        private getAliasByObj(obj: any): string {
            var tClassName: string = ClassUtils.getRegClass(obj);
            if (tClassName == null || tClassName == "") return "";
            var tClass = ClassUtils.getClass(tClassName);
            if (tClass == null) return "";
            return "";
        }

        protected writeArray(array): void {
            this.writeByte(ByteArray.ARRAY_TYPE);
            var len: number = array.length;
            var ref: number = this._objTable.indexOf(array);
            if (ref > -1) {
                this.writeUInt29(len << 1);
            } else {
                this.writeUInt29((len << 1) | 1);
                this.writeStringWithoutType(ByteArray.EMPTY_STRING);
                for (var i = 0; i < len; i++) {
                    this.writeObject2(array[i]);
                }
                this._objTable.push(array);
            }
        }

        protected writeAMFByteArray(ba: ByteArray): void {
            this.writeByte(ByteArray.BYTEARRAY_TYPE);
            var ref: number = this._objTable.indexOf(ba);
            if (ref >= 0) {
                this.writeUInt29(ref << 1);
            } else {
                var len: number = ba.length;
                this.writeUInt29((len << 1) | 1);
                this.writeBytes(ba, 0, len);
            }
        }

        protected writeMapAsECMAArray(o: any): void {
            this.writeByte(ByteArray.ARRAY_TYPE);
            this.writeUInt29((0 << 1) | 1);
            var count: number, key: string;
            for (key in o) {
                count++;
                this.writeStringWithoutType(key);
                this.writeObject2(o[key]);
            }
            this.writeStringWithoutType(ByteArray.EMPTY_STRING);
        }

        protected writeUInt29(ref: number): void {
            if (ref < 0x80) {
                this.writeByte(ref);
            } else if (ref < 0x4000) {
                this.writeByte(((ref >> 14) & 0x7F) | 0x80);
                this.writeByte(ref & 0x7F);
            } else if (ref < 0x200000) {
                this.writeByte(((ref >> 14) & 0x7F) | 0x80);
                this.writeByte(((ref >> 7) & 0x7F) | 0x80);
                this.writeByte(ref & 0x7F);
            } else if (ref < 0x40000000) {
                this.writeByte(((ref >> 22) & 0x7F) | 0x80);
                this.writeByte(((ref >> 15) & 0x7F) | 0x80);
                this.writeByte(((ref >> 8) & 0x7F) | 0x80);
                this.writeByte(ref & 0xFF);
            } else {
                console.log("Integer out of range: " + ref);
            }
        }

        protected getTraitReference(ref: number): any {
            return this._traitsTable[ref];
        }
    }
}
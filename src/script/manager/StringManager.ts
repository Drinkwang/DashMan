/**屏蔽字处理
 * @author pe
 */


namespace com.manager {
    import WordItem = com.utils.WordItem;
    import StringUtil = com.utils.StringUtil;

    export class StringManager {
        private static m_tailWords: Object;
        private static m_headWords: Object;
        private static m_numWords: Object;   //数字屏蔽库
        private static m_extraWords: Object;

        private static NUM_WORDS_COUNT: number = 3;

        private static MODE_NORMAL: number = 0;
        private static MODE_HARD: number = 1;

        public static isFilter: boolean = true;
        public static isFilterSingleNum: boolean = true;
        public static FILTER_MODE: number = 0;

        public static init(words: string = null): void {
            var data: string = "";
            switch (StringManager.FILTER_MODE) {
                case StringManager.MODE_NORMAL: {
                    data = Laya.loader.getRes(G_ConstantUrls.TXT_FILTER_WORDS);
                    break;
                }
                case StringManager.MODE_HARD: {
                    data = Laya.loader.getRes(G_ConstantUrls.TXT_FILTER_WORDS_HIGH);
                    break;
                }
            }
            var ba:ByteArray;
			if (!com.utils.Global.debug){
				ba = new ByteArray();
				ba.writeArrayBuffer(data);
				ba.uncompress();
				data = ba.readUTFBytes(ba.length);
			}
			var numData:any = Laya.loader.getRes(G_ConstantUrls.TXT_FILTER_WORDS_NUM);
			if (!com.utils.Global.debug && numData){
				ba = new ByteArray();
				ba.writeArrayBuffer(numData);
				ba.uncompress();
				numData = ba.readUTFBytes(ba.length);
				data = data.concat("\r\n" + numData);
			}
            if (words != null) {
                data = data.concat("\r\n" + words);
            }

            StringManager.m_tailWords = new Object();
            StringManager.m_headWords = new Object();
            StringManager.m_numWords = new Object();
            StringManager.m_extraWords = new Object();
            var dataList: any[] = data.split('\r\n');
            for (var index: number = 0; index < dataList.length; index++) {
                var line: string = dataList[index];
                var c: string = line.charAt(0);
                var headWord: WordItem = StringManager.m_headWords[c];
                if (headWord == null) {
                    StringManager.m_headWords[c] = headWord = new WordItem();
                }
                headWord.filterWords.push(line);
                var lc: string = line.charAt(line.length - 1);
                headWord.tailWordDict[lc] = true;
                StringManager.m_tailWords[lc] = true;
            }

            dataList = numData.split('\r\n');
            for (index = 0; index < dataList.length; index++) {
                line = dataList[index];
                StringManager.m_numWords[line] = true;
            }

            if (words != null) {
                dataList = words.split('\r\n');
                for (index = 0; index < dataList.length; index++) {
                    line = dataList[index];
                    StringManager.m_extraWords[line] = true;
                }
            }
        }

        /**获取第一行节点位置*/
        private static GetLine(content: string, index: number): number {
            for (var i: number = index; i < content.length; i++) {
                if (content.charAt(i) == '\n') {
                    return i + 1;
                }
            }
            return content.length;
        }

        /**
         *  isFilterNum 是否进行连续数字过滤
         *  isFilterSNum 是否进行单个数字过滤 在isFilterSingleNum为false的时候都是不过滤
         * isExtraWord 是否进行额外词库过滤
         **/
        public static Filter(input: string, isFilterNum: boolean = true, isFilterSNum: boolean = true, isExtraWord: boolean = true): string {
            if (!StringManager.isFilterSingleNum)
                isFilterSNum = false;

            if (input == null || input == "") return "";
            if (!StringManager.isFilter) return input;
            input = StringUtil.remove(input, " ");
            input = StringManager._Filter(input, isFilterNum, isFilterSNum, isExtraWord);
            if (isFilterNum)
                input = StringManager.filterNum(input);

            return input;
        }

        public static IsDirty(text: string, isFilterNum: boolean = true, isFilterSNum: boolean = true, isExtraWord: boolean = true): boolean {
            var ftext: string = StringManager.Filter(text, isFilterNum, isFilterSNum, isExtraWord);
            return ftext != StringUtil.remove(text, " ");
        }

        private static filterNum(input: string): string {
            var count: number = 0;
            var sIdx: number = 0;
            var eIdx: number = 0;
            var sIdxArray: any[] = [];
            var eIdxArray: any[] = [];
            for (var i: number = 0; i < input.length; i++) {
                var s: string = input.charAt(i);
                if (StringManager.m_numWords[s]) {
                    sIdx = count == 0 ? i : sIdx;
                    eIdx = i;
                    count = count + 1;
                    if (count == StringManager.NUM_WORDS_COUNT) {
                        sIdxArray.push(sIdx);
                    }
                    if (i == input.length - 1) {
                        eIdxArray.push(eIdx);
                    }
                } else {
                    if (count >= StringManager.NUM_WORDS_COUNT) {
                        eIdxArray.push(eIdx);
                    }
                    count = 0;
                }
            }

            var filterText: string = input;
            for (var n: number = 0; n < sIdxArray.length; n++) {
                sIdx = sIdxArray[n];
                eIdx = eIdxArray[n];

                if (eIdx < sIdx) continue;

                filterText = filterText.substring(0, sIdx + 1);
                for (var m: number = 0; m < (eIdx - sIdx - 1); m++) {
                    filterText = filterText + "*";
                }
                filterText = filterText + input.substring(eIdx);
            }
            return filterText;
        }

        private static _Filter(input: string, isFilterNum: boolean = true, isFilterSNum: boolean = true, isExtraWord: boolean = true): string {
            var _input: string = input.toLocaleLowerCase();
            var tailIdx: any[] = [];
            var headIdx: any[] = [];

            for (var i: number = 0; i < _input.length; i++) {
                var c: string = _input.charAt(i);
                if (StringManager.m_headWords[c] != null) {
                    headIdx.push(i);
                }
                if (StringManager.m_tailWords[c] != null)
                    tailIdx.push(i);
            }

            for (var j: number = 0; j < headIdx.length; j++) {
                var hidx: number = headIdx[j];
                for (var k: number = tailIdx.length - 1; k >= 0; k--) {
                    var tidx: number = tailIdx[k];
                    if (tidx < hidx) continue;
                    var hc: string = input.charAt(hidx);
                    var tc: string = input.charAt(tidx);
                    var headWord: WordItem = StringManager.m_headWords[hc];
                    if (headWord == null || headWord.tailWordDict[tc] == null) continue;
                    var s: string = input.substr(hidx, tidx - hidx + 1);
                    if (!StringManager.IsMatch(s.toLocaleLowerCase(), headWord, isFilterSNum, isExtraWord)) continue;

                    var filterText: string = input.substring(0, hidx);
                    for (var m: number = 0; m <= tidx - hidx; m++) {
                        filterText = filterText + "*";
                    }
                    filterText = filterText + input.substring(tidx + 1);

                    return StringManager.Filter(filterText, isFilterNum, isFilterSNum, isExtraWord);
                }
            }
            return input;
        }

        private static IsMatch(text: string, headWord: WordItem = null, isFilterSNum: boolean = true, isExtraWord: boolean = true): boolean {
            if (text == null || text == "" || text.replace(/\*/g, "") == "") return false;
            if (headWord == null) headWord = StringManager.m_headWords[text.charAt(0)];
            for (var word of headWord.filterWords) {
                if (word.length != text.length || (!isFilterSNum && StringManager.m_numWords[word]) || (StringManager.m_extraWords[word] && !isExtraWord))
                    continue;
                if (word == text)
                    return true;
            }

            return false;
        }

        public static changeFilterMode(mode: number = 0, words: string = null): void {
            StringManager.FILTER_MODE = mode > StringManager.MODE_HARD ? StringManager.MODE_HARD : (mode < StringManager.MODE_NORMAL ? StringManager.MODE_NORMAL : mode);
            StringManager.init(words);
        }


        public static initFromNet(p:NetWordFilter):void{
            this.isFilter = p.wordOpen == 1;
            this.isFilterSingleNum = p.singleNum == 1;
            this.changeFilterMode(p.wordMode, p.words);
        }


        public static randName(): string {
            var ret: string;
            ret = ConfigParse.nickName.fristName[Math.floor(Math.random() * ConfigParse.nickName.fristName.length)];
            ret += ConfigParse.nickName.secondName[Math.floor(Math.random() * ConfigParse.nickName.secondName.length)];
            return ret;
        }
    }
}

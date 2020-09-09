namespace game.utils {
    import Sprite = laya.display.Sprite;
    import Input = laya.display.Input;

    export class LoadingUtil {
        static sLoading: Sprite = null;
        static slOutTime: number;
        static slState: boolean = false;

        constructor() {
        }

        public static runTime(t: number): void {
            if (LoadingUtil.slOutTime > 0 && LoadingUtil.slState) {
                LoadingUtil.slOutTime -= t;
                if (LoadingUtil.slOutTime <= 0) {
                    LoadingUtil.sLoading = new Sprite();
                    // LoadingUtil.sLoading.addChild();
                    LoadingUtil.sLoading.mouseEnabled = true;
                }
            }
        }

        public static startSLoading(): void {
            if (!LoadingUtil.slState) {
                LoadingUtil.slOutTime = 10000;
                LoadingUtil.slState = true;
            }
        }

        public static stopSLoading(): void {
            LoadingUtil.slState = false;
            if (LoadingUtil.sLoading) {
                LoadingUtil.sLoading.parent.removeChild(LoadingUtil.sLoading);
                LoadingUtil.sLoading = null;
            }
        }
    }
}
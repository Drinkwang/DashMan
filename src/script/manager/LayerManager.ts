module com.manager {
    import Sprite = laya.display.Sprite;
    import DialogManager = laya.ui.DialogManager;
    import Event = laya.events.Event;
    import Button = laya.ui.Button;
    import Handler = laya.utils.Handler;

    export class LayerManager extends Sprite {
        public static readonly TOPTIP: number = 1001;
        public static readonly TOPDIALOG: number = 1000;
        public static readonly LOADING: number = 999;
        public static readonly TIP: number = 998;
        public static readonly DIALOG: number = 997;
        public static readonly VIWER: number = 996;
        public static readonly SENCE: number = 995;
        public static readonly BG: number = 994;

        public dialogManager: DialogManager = new DialogManager();

        constructor() {
            super();
        }

        public init(): void {
            Dialog.manager = this.dialogManager;
            this.addChild(this.dialogManager);
            this.dialogManager.zOrder = LayerManager.DIALOG;
            // Laya.stage.on(Event.RESIZE, this, this.onResize);
        }

        private onResize(event: Event): void {
            var num: number = this.numChildren;
            var width: number = Laya.stage.width;
            var height: number = Laya.stage.height;
            this.doResize(width, height, this);
            this.doResize(width, height, this.dialogManager);
        }

        private doResize(width: Number, height: Number, layer: Sprite): void {
            if (layer == null)
                return;

            let view: any
            let num: number = this.numChildren;
            for (let i: number = 0; i < num; i++) {
                view = layer.getChildAt(i);
                if (view instanceof View)
                    view["onResize"](width, height);
            }
        }

        public show(dialog: Dialog, closeOther: boolean = false): void {
            dialog.show(closeOther);
            this.regColse(dialog, 2);
        }

        public popup(dialog: Dialog, closeOther: boolean = false): void {
            dialog.popup(closeOther);
            this.regColse(dialog, 2);
        }

        public close(dialog: Dialog) {
            dialog.close();
        }

        /**
         * child：显示对象，type：类型（VIEW，DIALOG.....），ct：是否居中（默认false）
         * */
        public add(child: Sprite, type: number, ct: Boolean = false): void {
            this.addChild(child);
            child.zOrder = type;
            if (ct) {
                child.x = (Laya.stage.width - child.width) / 2;
                child.y = (Laya.stage.width - child.height) / 2;
            }
            this.regColse(child, 1);
        }

        /**
         * 移除显示层
         * */
        public remove(child: Sprite, destroy: boolean = false): void {
            child.removeSelf();
        }

        public doOpen(view: Sprite, openType: number): void {
            switch (openType) {
                case 1: {
                    App.layer.add(view, LayerManager.VIWER);
                    break;
                }
                case 2: {
                    App.layer.show(view as Dialog);
                    break;
                }
                case 3: {
                    App.layer.popup(view as Dialog);
                    break;
                }
                case 4: {
                    App.layer.add(view, LayerManager.TIP);
                    break;
                }
                case 5: {
                    App.layer.add(view, LayerManager.TOPDIALOG);
                    break;
                }
            }
        }

        /**
         * openType
         *        1.View(add)
         *        2.Dialog(show)
         *        3.Dialog(popup)
         *        4.Tip(add)
         */
        public doClose(view: Sprite, openType: number): void {
            switch (openType) {
                case 1:
                case 4: {
                    App.layer.remove(view);
                    break;
                }
                case 2:
                case 3: {
                    App.layer.close(view as Dialog);
                    break;
                }
            }
        }

        private regColse(sprite: Sprite, type: number) {
            let closeBtn: Button = sprite.getChildByName("close") as Button;
            if (closeBtn && closeBtn instanceof Button) {
                if (type == 1) {
                    closeBtn.clickHandler = Handler.create(this, this.remove, [sprite], false);
                } else {
                    closeBtn.clickHandler = Handler.create(this, this.close, [sprite], false);
                }
            }
        }
    }
}

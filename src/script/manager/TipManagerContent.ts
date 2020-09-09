namespace com.manager {



    import Component = laya.ui.Component;
    import Handler = laya.utils.Handler;
    import Sprite = laya.display.Sprite;
    import Text = laya.display.Text;
    import Event = laya.events.Event;
    import UIEvent = laya.ui.UIEvent;
    /**
     * 原laya的TipManager的js代码重写TS了，方便修改使用
     */
    export class TipManagerContent extends Component {


        static offsetX: number = 10;
        static offsetY: number = 15;
        static tipTextColor: string = "#ffffff";
        static tipBackColor: string = "#111111";
        static tipDelay: number = 200;

        private _tipBox:Component;
        private _tipText:Text;
        private _defaultTipHandler: Function;
        private _registerTipHandler: Handler;

        constructor() {

            super();

            this._tipBox=new Component();
            this._tipBox.addChild(this._tipText=new Text());
            this._tipText.x = this._tipText.y =5;
            this._tipText.color = TipManagerContent.tipTextColor;
            this._defaultTipHandler=this._showDefaultTip;
            Laya.stage.on(UIEvent.SHOW_TIP,this,this._onStageShowTip);
            Laya.stage.on(UIEvent.HIDE_TIP,this,this._onStageHideTip);
            this.zOrder=1100
        }

        _onStageHideTip(e:Event):void {
            Laya.timer.clear(this,this._showTip);
            this.closeAll();
            this.removeSelf();
        }

        _onStageShowTip(data):void
        {
            Laya.timer.once(TipManagerContent.tipDelay,this,this._showTip,[data],true);
        }

        _showTip(tip:any):void{
            if ((typeof tip=='string')){
                var text=String(tip);
                if (Boolean(text)){
                    this._defaultTipHandler(text);
                }
            }else if ((tip instanceof laya.utils.Handler )){
                (tip).run();
            }else if ((typeof tip=='function')){
                (tip).apply();
            }else{
                this._registerTipHandler.runWith(tip);
            }
            if (true){
                Laya.stage.on(Event.MOUSE_MOVE,this,this._onStageMouseMove);
                Laya.stage.on(Event.MOUSE_DOWN,this,this._onStageMouseDown);
            }
            this._onStageMouseMove(null);
        }

        _onStageMouseDown(e:Event):void
        {
            this.closeAll();
        }

        _onStageMouseMove=function(e){
            this._showToStage(this,TipManagerContent.offsetX,TipManagerContent.offsetY);
        }

        _showToStage=function(dis:Sprite,offX:number = 10 ,offY :number = 15){
            var rec=dis.getBounds();
            TipManagerContent.offsetX = offX;
			 TipManagerContent.offsetY = offY;
            dis.x=Laya.stage.mouseX+offX;
            dis.y=Laya.stage.mouseY+offY;
            if (dis.x+rec.width > Laya.stage.width){
                dis.x-=rec.width+offX;
            }
            if (dis.y+rec.height > Laya.stage.height){
                dis.y-=rec.height+offY;
            }
        }
        closeAll():void{
            Laya.timer.clear(this,this._showTip);
            Laya.stage.off(Event.MOUSE_MOVE,this,this._onStageMouseMove);
            Laya.stage.off(Event.MOUSE_DOWN,this,this._onStageMouseDown);
            this.removeChildren();
        }

        showDislayTip(tip:Sprite,offX:number = 10 ,offY :number = 15):void{
            this.addChild(tip);
            this._showToStage(this,offX,offY);
            // Laya._currentStage.addChild(this);

            Laya.stage.addChild(this);
        }

        _showDefaultTip(text:string){
            this._tipText.text=text;
            var g=this._tipBox.graphics;
            g.clear();
            g.drawRect(0,0,this._tipText.width+10,this._tipText.height+10,TipManagerContent.tipBackColor);
            this.addChild(this._tipBox);
            this._showToStage(this);
            // Laya._currentStage.addChild(this);

            Laya.stage.addChild(this);

        }


        get defaultTipHandler(): Function {
            return this._defaultTipHandler;
        }

        set defaultTipHandler(value: Function) {
            this._defaultTipHandler = value;
        }

        get registerTipHandler(): laya.utils.Handler {
            return this._registerTipHandler;
        }

        set registerTipHandler(value: laya.utils.Handler) {
            this._registerTipHandler = value;
        }
    }

}

import Event = Laya.Event;

export default class HpSizeUtil extends Laya.Button{

    private storeValue: number;
    constructor() {

        super();
        this.storeValue=this.scaleX;
        console.log(this.name+"/"+this.storeValue+"/n");
        this.on(Event.CLICK, this, this.onClickFunction);
        this.on(Event.MOUSE_OVER, this, this.onMouse_Over);
        this.on(Event.MOUSE_OUT, this, this.onMouse_Out);
      
    }

    onClickFunction(): void {
        this.scaleX = this.storeValue+this.storeValue/5;
        this.scaleY = this.storeValue+this.storeValue/5;
        //timer.once(500, this, this.onClickFunctionCallBack)
       // this.color = "#b01411";
        Laya.timer.once(200, this, this.onClickFunctionCallBack);
       
    }

    onMouse_Over(): void {

        this.scaleX = this.storeValue+this.storeValue/10;
        this.scaleY = this.storeValue+this.storeValue/10;
            
        

       // this.color = "#f8524f";

    }

    onMouse_Out(): void {

        this.scaleX = this.storeValue;
        this.scaleY = this.storeValue;
    
    //   this.color = "#ff0400";
    }

    onClickFunctionCallBack(): void {
        if (this.storeValue >= this.storeValue) {
            this.scale(this.storeValue, this.storeValue);
        }
        else {
            this.scaleX = this.storeValue;
            this.scaleY = this.storeValue;
        }
    //    this.color = "#ff0400";
    }

}

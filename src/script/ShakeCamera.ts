import Box = Laya.Box;
export default class ShakeCamera extends Laya.Script{
    public camera: Laya.Box;
    private enableShake: boolean;
    private shakeTime: number;
    private extent: number;
    constructor() {
        super();

  

    }

    enebleShake(enable: boolean) {
        this.enableShake = enable;
        if (this.enableShake == true) {
            Laya.timer.clear(this, this.update);
            Laya.timer.loop(100, this, this.update);
        }
        else
            Laya.timer.clear(this, this.update);
    }
    init(cam: Laya.Box, shakeTime: number, extent: number = 200) {
        this.camera = cam;
        this.shakeTime = shakeTime;
        this.extent = extent;
        this.enableShake=false;

    }
    update(en: boolean) {
        if (this.enableShake && this.camera != null) {
            if (this.shakeTime > 0) {
                this.shakeTime - Laya.timer.delta;
                if (this.shakeTime < 0) {
                    this.camera.pos(0, 0);
                    this.enableShake = false;

                }
                else {
                    var posY: number = Math.floor(-this.extent * 0.5 + this.extent * Math.random())
                    this.camera.pos(0, posY);
                }
            }

        }

    }


}
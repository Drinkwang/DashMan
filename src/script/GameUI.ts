import { ui } from "./../ui/layaMaxUI";
import GameControl from "./GameControl"
import battleFieldUI = ui.test.battleFieldUI;
import AniName from "./aniName";
import GameConfig from "../GameConfig";
import Enemy from "./Enemy";
import ShakeCamera from "./ShakeCamera";
import Configuration from "../Configuration";
import AudioPlayUtils from "./utils/AudioPlayUtils";
import LocalStore from "./utils/LocalStore";
import DanmuUI from "./DanmuUI";
/**
 * 本示例采用非脚本的方式实现，而使用继承页面基类，实现页面逻辑。在IDE里面设置场景的Runtime属性即可和场景进行关联
 * 相比脚本方式，继承式页面类，可以直接使用页面定义的属性（通过IDE内var属性定义），比如this.tipLbll，this.scoreLbl，具有代码提示效果
 * 建议：如果是页面级的逻辑，需要频繁访问页面内多个元素，使用继承式写法，如果是独立小模块，功能单一，建议用脚本方式实现，比如子弹脚本。
 */
export default class GameUI extends battleFieldUI {
    /**设置单例的引用方式，方便其他类引用 */
    static instance: GameUI;
    /**当前游戏积分字段 */
    public _score: number;
    public enemyNum: number;
    /**游戏控制脚本引用，避免每次获取组件带来不必要的性能开销 */
    private _control: GameControl;
    private _shakeCamera: ShakeCamera;
    private level: number;
    private enemyLength: number;
    private isGameOver: boolean;
    private page: number;
    public canTrigger: boolean = false;
    public comicWait: boolean = false;

    constructor() {
        super();

        GameUI.instance = this;
        this.autoDestroyAtClosed = true;
        this.level = Configuration.currentSelectLevel;
        LocalStore.SaveValue(LocalStore.curSelectLevel, String(this.level));
        this.page = 1;
        this.ball.play(0, true);
        //Laya.MouseManager.multiTouchEnabled = false;

    }

    comicNext(): void {
        if (this.comicWait == false) {
            this.comicWait = true;
            Laya.timer.once(800, this, function (this) {
                this.comicWait = false;
            }, [this]);
            AudioPlayUtils.playAudio("sound/11906.wav");
            this.page++;
            if (this.page <= 3) {
                this.comic.skin = "comic/op" + this.page + ".png"
            }
            if (this.page == 4) {
                this.comic.skin = "comic/ed" + (this.page - 3) + ".png";
                this.comic.visible = false;
            }
            else if (this.page > 4) {
                this.comic.skin = "comic/ed" + (this.page - 3) + ".png";
            }
            if (this.page >= 7) {
                this.jixu.text = "全剧终(请重新进入游戏)";
            }
        }
    }
    onEnable(): void {
        this._control = this.getComponent(GameControl);
        this._shakeCamera = this.getComponent(ShakeCamera);
        //点击提示文字，开始游戏
        this.tip.on(Laya.Event.CLICK, this, this.onTipClick);
        this.returnHome.clickHandler = Laya.Handler.create(this, this.onReturnHome);
        this.onLoaded();
        this.nextLevel.on(Laya.Event.CLICK, this, this.onClickRestart);
        if (Configuration.startCgPlay == false) {
            this.comic.on(Laya.Event.CLICK, this, this.comicNext);
            this.comic.visible = true;
            LocalStore.SaveBoolValue(LocalStore.animStartCgPlay, true);
        } else {
            this.comic.visible = false;

        }
    }

    onReturnHome() {

        Laya.Scene.load(Configuration.InitScene, Laya.Handler.create(this, this.onReturnHome2));

    }

    onReturnHome2() {
        Laya.Scene.open(Configuration.InitScene, true);

    }

    onTipClick(e: Laya.Event): void {
        this.tip.visible = false;
        this._score = 0;
        this.score.text = ("敌人：" + this._score + "/" + this.enemyNum);
        this._control.startGame();
        this.playerOutLint.visible = true;
        this.playAni();
    }
    Gameover(): void {
        //console.log(this.Gameover);
        Laya.timer.once(2000, this, this.Gameover2)
        Laya.timer.once(3500, this, this.restart)
        Laya.SoundManager.stopMusic();
        this.isGameOver = true;


    }
    Gameover2() {
        this.overGame.text = "Game Over";



    }

    Determineoutcome() {
        if (this.isGameOver == false)
            Laya.timer.once(2000, this, this.Determineoutcome2)

    }

    Determineoutcome2() {
        if (this._score >= this.enemyNum) {
            this.overGame.text = "You Win";
            this.nextLevel.visible = true;
            this.deTipChange();

            this.nextLevel.text = "下一关";

            this.level++;

            if (Configuration.currentAlreadyLevel < this.level) {
                Configuration.currentAlreadyLevel = this.level;
                LocalStore.SaveValue(LocalStore.curMaxLevel, String(this.level));
            }
            Configuration.currentSelectLevel = this.level;
            LocalStore.SaveValue(LocalStore.curSelectLevel, String(this.level));
            Configuration.currentSelectLevel = Number(LocalStore.loadValue(LocalStore.curSelectLevel));
            if (this.level >= Configuration.levelNum + 1) {
                this.page = 4;
                this.comic.skin = "comic/ed" + (this.page - 3) + ".png";
                this.comic.visible = true;
                this.comic.on(Laya.Event.CLICK, this, this.comicNext);

            }
            this.nextLevel.on(Laya.Event.CLICK, this, this.onClickRestart);

        } else {
            this.overGame.text = "你没有打倒全部的敌人";
            this.overGame.visible = true;
            Laya.timer.once(2000, this, this.restart);
            Laya.SoundManager.stopMusic();
        }

    }
    deTipChange() {
        this.deTip.visible = true;

        var randomNum = Math.floor(Math.random() * Configuration.tipText.length) + 1;
        if (randomNum >= Configuration.tipText.length) {
            randomNum = Configuration.tipText.length - 1;
        }
        else if (randomNum < 0)
            randomNum = 0;
        this.deTip.text = Configuration.tipText[randomNum];
    }
    restart() {
        if (this.nextLevel != null) {
            this.nextLevel.visible = true;
            this.deTipChange();
            this.nextLevel.text = "Restart";
        }
        this._control.stopGame();
        this.isGameOver = false;


    }

    onClickRestart() {
        var roleAni: Laya.Animation = this.player.getChildByName("ani") as Laya.Animation;
        roleAni.visible = true;
        this.progress.value = 0;
        this.group.x = -2;
        if (this.level == 1)
            this.bulletin.visible = true;
        else
            this.bulletin.visible = false;
        this.sky.x = -10;
        var roleAni: Laya.Animation = this.player.getChildByName("ani") as Laya.Animation;
        roleAni.play(0, true, AniName.idle);
        this.player.x = -2;
        this.player.y = 228;
        GameUI.instance.nextLevel.visible = false;
        GameUI.instance.deTip.visible = false;
        GameUI.instance.overGame.text = "";
        this.clearEnemy();
        this._score = 0;
        this.onLoaded();
        this.score.text = ("敌人：" + this._score + "/" + this.enemyNum);
        this._control.onStartGame();
        this.player.rotation = 0;
        AudioPlayUtils.playMusic("res/bgm.mp3");

    }

    /**增加分数 */
    addScore(value: number = 1): void {
        this._score += value;
        this.score.changeText("敌人：" + this._score + "/" + this.enemyNum);
        //随着分数越高，难度增大
        //   if (this._control.rountClickTime > 600 && this._score % 20 == 0) this._control.rountClickTime -= 20;
    }

    clearEnemy(): void {
        for (var i = 0; i < this.enemyLength; i++) {
            var obj = GameUI.instance.getChildByName("Enemy");
            if (obj != null)
                obj.destroy();
        }
    }
    onLoaded(): void {
        this.enemyNum = 0;
        if (Configuration.currenSelectSkill != 0) {
            this.ball.visible = true;
        }
        else
            this.ball.visible = false;

        var colorMatrix: any =
            [
                0, 0, 1, 0, 1, //R
                0, 0, 0, 0, 0, //G
                0, 0, 0, 0, 0, //B
                0, 0, 0, 1, 0, //A
            ];

        var redFilter: Laya.ColorFilter = new Laya.ColorFilter(colorMatrix);
        var roleAni: Laya.Animation = this.player.getChildByName("ani") as Laya.Animation;
        if (Configuration.isCreazyMode == true) {
            roleAni.filters = [redFilter];
        }

        roleAni.interval = this._control.aniInterVal;
        if (this.level == 1)
            this.bulletin.visible = true;
        else
            this.bulletin.visible = false;
        roleAni.loadImages(this.aniUrl(AniName.chargingA, 2), AniName.chargingA);
        roleAni.loadImages(this.aniUrl(AniName.chargingB, 4), AniName.chargingB);
        roleAni.loadImages(this.aniUrl(AniName.fall, 2), AniName.fall);
        roleAni.loadImages(this.aniUrl(AniName.dash, 6), AniName.dash);
        roleAni.loadImages(this.aniUrl(AniName.hurt, 3), AniName.hurt);
        roleAni.loadImages(this.aniUrl(AniName.roll, 5), AniName.roll);
        roleAni.loadImages(this.aniUrl(AniName.idle, 3), AniName.idle);
        roleAni.play(0, true, AniName.idle);
        Laya.SoundManager.musicVolume = 0.3;


        console.log("-------人物动画载入---------" + this._control.aniInterVal);

        Laya.Animation.createFrames(this.aniUrl(AniName.Lady_die, 1), AniName.Lady_die.substr(6, 100));
        Laya.Animation.createFrames(this.aniUrl(AniName.Lady_idle, 2), AniName.Lady_idle.substr(6, 100));
        Laya.Animation.createFrames(this.aniUrl(AniName.fat_idle, 2), AniName.fat_idle.substr(6, 100));
        Laya.Animation.createFrames(this.aniUrl(AniName.fat_die, 7), AniName.fat_die.substr(6, 100));
        Laya.Animation.createFrames(this.aniUrl(AniName.slim_idle, 1), AniName.slim_idle.substr(6, 100));
        Laya.Animation.createFrames(this.aniUrl(AniName.slim_die, 6), AniName.slim_die.substr(6, 100));


        console.log("-------物品动画载入---------" + this._control.aniInterVal + AniName.NoPeeSign_die.substr(5, 100));

        Laya.Animation.createFrames(this.aniUrl(AniName.NoPeeSign_die, 7), AniName.NoPeeSign_die.substr(5, 100));
        Laya.Animation.createFrames(this.aniUrl(AniName.NoPeeSign_idle, 1), AniName.NoPeeSign_idle.substr(5, 100));
        Laya.Animation.createFrames(this.aniUrl(AniName.car_die, 5), AniName.car_die.substr(5, 100));
        Laya.Animation.createFrames(this.aniUrl(AniName.car_idle, 1), AniName.car_idle.substr(5, 100));
        Laya.Animation.createFrames(this.aniUrl(AniName.oildrum_die, 6), AniName.oildrum_die.substr(5, 100));
        Laya.Animation.createFrames(this.aniUrl(AniName.oildrum_idle, 1), AniName.oildrum_idle.substr(5, 100));
        Laya.Animation.createFrames(this.aniUrl(AniName.ttrlSign_die, 5), AniName.ttrlSign_die.substr(5, 100));
        Laya.Animation.createFrames(this.aniUrl(AniName.ttrlSign_idle, 1), AniName.ttrlSign_idle.substr(5, 100));

        console.log(AniName.car_die.substr(5, 100));


        this.onLoadEnemy();
        console.log("-------敌人单位载入---------" + this._control.aniInterVal);


    }


    playAni() {
        this.playerOutLint.ani1.play(0, true);
    }

    aniUrl(aniName: string, length: number): Array<string> {
        var urls: Array<string> = [];
        for (var i: number = 0; i < length; i++) {
            //动画资源路径要和动画图集打包前的资源命名对应起来
            urls.push("ani/" + aniName + i + ".png")
        }
        return urls;

    }
    /**停止游戏 */
    stopGame(): void {
        //this.tipLbll.visible = true;
        //this.tipLbll.text = "游戏结束了，点击屏幕重新开始";
        this._control.stopGame();
    }

    onLoadEnemy() {
        this._control.bgSpriteList = [];
        this._control.bgSpriteList.push(this.bulletin);
        this._control.bgSpriteList.push(this.group);
        this.onLoadJson("level" + this.level + ".json");
        this.onLoadXml("danmu" + this.level + ".xml");

    }

    onShakeCamera(time: number, extent: number) {

    }

    onSubSpeed(c: number, size: number) {
        var rate = (1 - ((c / 100) * size));
        this._control.cDistance = this._control.cDistance * rate;


    }

    onLoadXml(t: String) {
        Laya.loader.load("res/conf/" + t, Laya.Handler.create(this, function () {
            var xmlDom = Laya.loader.getRes("res/conf/" + t);
            Configuration.Xmlarray = [];

            var attr = xmlDom.childNodes[0].childNodes;
            
            var index=2;
            var weight=0;
            var text="2333";
           
            for (var i = 0; i<attr.length; i++) {
                var temp: { index: Number, weight: Number, text: String };
                temp = { index, weight, text };
                for (var j = 0; j < attr[i].attributes.length; j++) {
                    if (attr[i].attributes[j].nodeName == "index") {
                        temp.index = (Number)(attr[i].attributes[j].nodeValue);
                    }
                    else if (attr[i].attributes[j].nodeName == "weight") {
                        temp.weight = (Number)(attr[i].attributes[j].nodeValue);
                    }
                    else if (attr[i].attributes[j].nodeName == "text") {
                        temp.text = (attr[i].attributes[j].nodeValue);
                    }
                    else if (attr[i].attributes[j].nodeName == "LimitTimeMax") {
                        this.danmuSystem.limitTimeMax = (Number)(attr[i].attributes[j].nodeValue);
                    }
                    else if (attr[i].attributes[j].nodeName == "LimitTimeMin") {
                        this.danmuSystem.limitTimeMin = (Number)(attr[i].attributes[j].nodeValue);
                    }
                    else if (attr[i].attributes[j].nodeName == "LimitDanmuCount") {
                        this.danmuSystem.limitDanmuNum = (Number)(attr[i].attributes[j].nodeValue);
                    }
                }
                if(temp.weight>0&&temp.text.length>0)
                    Configuration.Xmlarray.push(temp);
            }

            GameUI.instance.danmuSystem.init();
        }), null, Laya.Loader.XML);
        //this.danmuSystem.init();

    }

    onLoadJson(t: String) {
        Laya.loader.load("res/conf/" + t, Laya.Handler.create(this, function () {
            var json: JSON = Laya.loader.getRes("res/conf/" + t);
            //console.log(json["enemy"]);
            var boardLength: number = json["Length"] as number;
            this.isGameOver = false;
            GameUI.instance._control.boardLength = 6803 * boardLength / 100;
            var enemys: Array<any> = json["enemy"] as Array<any>;
            //console.log(enemys);
            GameUI.instance.enemyLength = enemys.length;
            for (var i = 0; i < enemys.length; i++) {
                let box: Laya.Sprite = Laya.Pool.getItemByCreateFun("enemy" + i, GameUI.instance._control.enemy.create, GameUI.instance._control.enemy);
                var enemy: Enemy = box.getComponent(Enemy);
                var en: Object = enemys[i] as Object;
                enemy.c = Number(en["C"]);
                enemy.forceSize = en["Size"];
                enemy.beHitAudio = en["audioSrc"];
                enemy.tid = en["id"];
                enemy.idleAni = en["idleAni"];
                enemy.isbeHit = en["isbeHit"];
                enemy.name = en["name"];
                enemy.xPos = (en["posX"] / boardLength) * GameUI.instance._control.boardLength;
                enemy.yPos = en["posY"] + 241;
                enemy.shakeTime = en["shakeTime"];
                enemy.aniSpeedImpact = en["speedipa"];
                enemy.type = en["type"];
                enemy.beHitAni = en["beHitAni"];
                GameUI.instance.scene.addChild(box);
                box.pos(enemy.xPos, enemy.yPos);
                this._control.bgSpriteList.push(box);



            }
        }), null, Laya.Loader.JSON);
    }
}
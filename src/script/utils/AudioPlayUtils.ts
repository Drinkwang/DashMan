import Configuration from "../../Configuration";
export default class AudioPlayUtils {

    constructor() {

    }

    static playAudio(src: string) {
        if (Configuration.audioPlay == true)
            //Laya.SoundManager.soundVolume
            Laya.SoundManager.playSound(src);
    }

    static playMusic(src: string) {
        if (Configuration.audioPlay == true)
     //  if(Configuration.soundChannel==null)
            Configuration.soundChannel=Laya.SoundManager.playMusic(src, 0);
            
    }


    static changeAll(){
        if(Configuration.audioPlay == false){

            Laya.SoundManager.soundVolume=0;
            Laya.SoundManager.setMusicVolume(0);
        }
        else
        {
            Laya.SoundManager.soundVolume=1;
            Laya.SoundManager.setMusicVolume(0.5);

        }

    }
}
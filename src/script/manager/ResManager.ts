/**
 * name
 */


module com.manager{
    import SLoader = com.utils.SLoader;
    import Handler = laya.utils.Handler;
    import Animation = laya.display.Animation;
    import Loader = laya.net.Loader;
    import Image = laya.ui.Image;
    //import SkinAnimation = com.animation.SkinAnimation;
    import Templet = laya.ani.bone.Templet;
    import Skeleton = laya.ani.bone.Skeleton;

    export class ResManager{
        public static loader: SLoader = new SLoader();
        public static animGroupMap:Object = {};
        public static skGroupMap:Object = {};

        public static loadByGroup(group:string, urls: string[], onComplete: Handler, onProgress: Handler = null): void {
            ResManager.loader.start(urls, onComplete, onProgress);
            urls.forEach((url: string) => {
                Loader.setGroup(url, group);
            });
        }

        public static newImage(group:string, url:string):Image{
            let img:Image = new Image(url);
            Loader.setGroup(url, group);

            return img;
        }

        public static imgSetSkin(group:string, img:Image, url:string):void{
            img.skin = url;
            Loader.setGroup(url, group);
        }

        public static clearResByGroup(group:string):void{
            Loader.clearResByGroup(group);
        }

        public static clearTextureResByGroup(group:string):void{
       //     Loader.clearTextureResByGroup(group);
        }

        public static getAnimByGroup(group:string, aniName:string, atlasName:string, loaded?:Handler):Animation{
            return ResManager.getComAnimByGroup(new Animation, group, aniName, atlasName, loaded);
        }

        public static getSkinAnimByGroup(group:string, aniName:string, atlasName:string, loaded?:Handler):Animation{
            return ResManager.getComAnimByGroup(new SkinAnimation, group, aniName, atlasName, loaded);
        }

        private static getComAnimByGroup(anim:Animation, group:string, aniName:string, atlasName:string, loaded?:Handler):Animation{
            anim.loadAnimation(aniName, loaded, atlasName);
            ResManager.addAnimGroup(aniName, group);
            Loader.setGroup(atlasName, group);
            return anim;
        }

        static addAltasAndAnimGroup(url:string, group:string):void{
            ResManager.addAnimGroup(url, group);
            Loader.setGroup(url, group);
        }

        static addAnimGroup(url:string, group:string):void {
            let urls: string[] = ResManager.animGroupMap[group];
            if (!urls) {
                urls = [];
                ResManager.animGroupMap[group] = urls;
            }

            urls.push(url);
        }

        static getSkByGroup(url:string, group:string, loaded?:Handler):Skeleton{
            var skeleton:Skeleton = new Skeleton();
            skeleton.load(url, loaded);
            this.addSkByGroup(url, group);

            return skeleton;
        }

        public static addSkByGroup(url:string, group:string):void{
            let urls: string[] = ResManager.skGroupMap[group];
            if (!urls) {
                urls = [];
                ResManager.skGroupMap[group] = urls;
            }

            urls.push(url);
        }

        public static clearSkByGroup(group:string):void{
            let urls:string[] = ResManager.skGroupMap[group];
            if (urls){
                let len:number = urls.length;
                let sk:string;
                for (let i:number = 0; i < len; ++i){
                    sk = urls[i];
                    var tp:Templet = Templet.TEMPLET_DICTIONARY[sk];
                    if (tp){
                        tp.destroy();
                    }
                }
                delete ResManager.skGroupMap[group];
            }
        }

        public static clearAnimByGroup(group:string):void{
            let urls:string[] = ResManager.animGroupMap[group];
            if (urls){
                urls.forEach((url:string)=>{
                    Animation.clearCache(url);
                });
                delete ResManager.animGroupMap[group];
            }
        }
    }
}
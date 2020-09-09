/**
* name 
*/
module com.manager{
	export class ClassManager{
		private static clzzMap:Object = {};
		public static reg(clzz:any, name:string):void{
			clzz.__classFullName = name;
			clzz.__className = name.substr(name.lastIndexOf(".") + 1, name.length);
			ClassManager.clzzMap[name] = clzz;
		}

		public static getClass(fullName:string):any{
			return ClassManager.clzzMap[fullName];
		}

		public static getClassFullName(clzz:any):string{
			return clzz.__classFullName;
		}

		public static getClassName(clzz:any):string{
			return clzz.__className;
		}
	}
}
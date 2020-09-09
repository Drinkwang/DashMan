namespace game.cfg.parse {



    export class CfgTaskParse {
        private static cfgTaskIdMap: Object;
        private static cfgTaskRdTriggerMap: Object;


        public static init(): void {
            CfgTaskParse.cfgTaskIdMap = {};
            CfgTaskParse.cfgTaskRdTriggerMap = {};
            for (let key in ConfigParse.cfgTask.task) {
                let typeTasks: Array<CfgTaskTask> = ConfigParse.cfgTask.task[key];

                for (let cfg of typeTasks) {
                    if (CfgTaskParse.cfgTaskIdMap[cfg.taskId] != null) {
                        console.error("有重复任务Id配置 taskId:" + cfg.taskId);
                    }
                    CfgTaskParse.cfgTaskIdMap[cfg.taskId] = cfg;

                    if (cfg.trigger.triggerType != 0) {
                        if (cfg.trigger.triggerType == 1)//前置任务完成提交触发
                        {
                            let preTaskId: number = cfg.trigger.value;
                            let trigTasks: Array<CfgTaskTask> = CfgTaskParse.cfgTaskRdTriggerMap[preTaskId];
                            if (trigTasks == null) {
                                trigTasks = new Array<CfgTaskTask>();
                                CfgTaskParse.cfgTaskRdTriggerMap[preTaskId] = trigTasks;
                            }
                            trigTasks.push(cfg);
                        }
                    }
                }
            }
        }

        private static checkInit(): void {
            if (CfgTaskParse.cfgTaskIdMap == null)
                CfgTaskParse.init();

        }

        public static getTriggerNextTasks(taskId: number): Array<CfgTaskTask> {
            CfgTaskParse.checkInit();

            var nextTasks: Array<CfgTaskTask> = CfgTaskParse.cfgTaskRdTriggerMap[taskId];
            return nextTasks;
        }

        public static checkHasNextTrigger(taskId: number): boolean {
            var nextTasks: Array<CfgTaskTask> = CfgTaskParse.getTriggerNextTasks(taskId);
            if (nextTasks == null || nextTasks.length == 0) {
                return false;
            }
            return true;
        }

        public static getTaskCfgsArrByTaskType(taskType: number): Array<CfgTaskTask> {
            var typeTasks: Array<CfgTaskTask> = ConfigParse.cfgTask.task[taskType];

            return typeTasks;
        }

        public static geCfgTaskByTaskId(taskId: number): CfgTaskTask {
            CfgTaskParse.checkInit();

            return CfgTaskParse.cfgTaskIdMap[taskId];
        }


        // public static getCfgTask(taskType: number, taskId: number): CfgTaskTask {
        //     let cfgs: Array<CfgTaskTask> = ConfigParse.cfgTask.task[taskType];
        //     if (cfgs == null || cfgs.length <= 0) {
        //         return null;
        //     }
        //     for (let p of cfgs) {
        //         if (p.taskId == taskId) {
        //             return p;
        //         }
        //     }
        //     return null;

        // }


    }

}
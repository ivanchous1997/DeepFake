import { TaskStatus } from './taskStatus'
import { TaskType } from './taskType';

export class Task{
    id: number;
    status: TaskStatus;
    files: any;
    taskName: string;
    type: TaskType;
    result: any;
    constructor (
        id: number,
        status: TaskStatus,
        files: any,
        taskName: string,
        type: TaskType,
        result: any,
        )
        {
            this.id = id;
            this.status = status;
            this.files = files;
            this.taskName = taskName;
            this.type = type;
            this.result = result;
        }
}
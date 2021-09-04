import { TaskStatus } from './taskStatus'
import { TaskType } from './taskType';

export class Task{
    id: number;
    status: TaskStatus;
    files: any;
    taskName: string;
    type: TaskType;
}
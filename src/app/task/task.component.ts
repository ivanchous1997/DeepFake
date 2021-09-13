import { Component, OnInit } from "@angular/core";
import { AccountService } from "@app/_services/account.service";
import { ActivatedRoute} from '@angular/router';
import { ApiService } from "@app/_services";
import { Task } from "@app/_models/task/task";
import { TaskType } from "@app/_models/task/taskType";
import { TaskStatus } from "@app/_models/task/taskStatus";
import { Subscription } from "rxjs";
import { MatTableDataSource } from '@angular/material/table';

@Component({templateUrl: 'task.component.html'})
export class TaskComponent implements OnInit {
    constructor(
        private accountService: AccountService,
        private activateRoute: ActivatedRoute,
        private apiService: ApiService,
    ) {}

    private querySubscription: Subscription;
    displayedColumns: string[] = ['name', 'algResult'];
    task: Task;
    taskId: number;
    taskType: TaskType;
    taskResultSource: any;

    async ngOnInit() {
        var userName = this.accountService.userValue.firstName;
        var taskId = undefined;
        this.querySubscription = this.activateRoute.queryParams.subscribe(
            (queryParam: any) => {
                taskId = queryParam['id'];
                this.taskType = queryParam['type'];
            }
        );
        this.task = {
            id: this.taskId,
            taskName: 'Task 3',
            type: TaskType.Detection,
            status: TaskStatus.Successed,
            files: null,
            result: {
                algorithms:[
                    {name: 'Алгоритм 1', deepfake: '98%'},
                    {name: 'Алгоритм 2', deepfake: '93%'},
                    {name: 'Алгоритм 3', deepfake: '91%'}
                ],
                averageProbability: '94%',
                detectedFaces: 5
            }
        };
        this.taskResultSource = new MatTableDataSource(this.task.result.algorithms);
        console.log(this.taskResultSource);
        // await this.apiService.getTaskById(userName, taskId).then((result) => {
        //     this.task = result;
        // });
    }
}
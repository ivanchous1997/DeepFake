import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { User } from '@app/_models';
import { Task } from '@app/_models/task/task'
import { TaskStatus } from '@app/_models/task/taskStatus';
import { TaskType } from '@app/_models/task/taskType';
import { AccountService, ApiService } from '@app/_services';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({ templateUrl: 'profile.component.html' })
export class ProfileComponent implements OnInit {
    user: User;
    tasks: Task[] = 
    [
        {taskName: 'Task 1', id: 1, status: TaskStatus.New, files: null, type: TaskType.Detection, result: {
            algorithms:{
                algorithm1:{
                    deepfake: '98%'
                },
                algorithm2:{
                    deepfake: '95%'
                },
                algorithm3:{
                    deepfake: '87%'
                },
            },
            averageProbability: '93%'
        }},
        {taskName: 'Task 2', id: 1, status: TaskStatus.Successed, files: null, type: TaskType.Detection, result: {
            algorithms:{
                algorithm1:{
                    deepfake: '98%'
                },
                algorithm2:{
                    deepfake: '95%'
                },
                algorithm3:{
                    deepfake: '87%'
                },
            },
            averageProbability: '93%'
        }},
        {taskName: 'Task 3', id: 1, status: TaskStatus.Successed, files: null, type: TaskType.Detection, result: {
            algorithms:{
                algorithm1:{
                    deepfake: '98%'
                },
                algorithm2:{
                    deepfake: '95%'
                },
                algorithm3:{
                    deepfake: '87%'
                },
            },
            averageProbability: '93%'
        }},
        {taskName: 'Task 4', id: 1, status: TaskStatus.Calculating, files: null, type: TaskType.Detection, result: {
            algorithms:{
                algorithm1:{
                    deepfake: '98%'
                },
                algorithm2:{
                    deepfake: '95%'
                },
                algorithm3:{
                    deepfake: '87%'
                },
            },
            averageProbability: '93%'
        }},
        {taskName: 'Task 5', id: 1, status: TaskStatus.Calculating, files: null, type: TaskType.Detection, result: {
            algorithms:{
                algorithm1:{
                    deepfake: '98%'
                },
                algorithm2:{
                    deepfake: '95%'
                },
                algorithm3:{
                    deepfake: '87%'
                },
            },
            averageProbability: '93%'
        }},
    ];
    displayedColumns: string[] = ['taskName', 'status', 'type', 'details'];
    dataSource: any;

    constructor(
        private accountService: AccountService,
        private apiService: ApiService,
        private router: Router
        ) {
        this.user = this.accountService.userValue;
    }

    async ngOnInit() {
        this.dataSource = new MatTableDataSource(this.tasks);
        // this.apiService.getAllTasksByLogin(this.user.username).then((result) => {
        //     this.tasks = result;
        // });
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
      }

    openTaskDetails(task: Task) {
        this.router.navigate(['/taskDetails'], {
            queryParams: {
                id: task.id,
                type: task.type
            }
        });
    }
}
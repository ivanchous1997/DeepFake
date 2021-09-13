import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { Task } from '@app/_models/task/task';
import { TaskType } from '@app/_models/task/taskType';


@Injectable({ providedIn: 'root' })
export class ApiService {

    constructor(
        private _http: HttpClient
    ) {}

    //#region create tasks
    createDetectionTask (login: any, files: any, taskName: string) {

        let url = `${environment.apiServiceConfiguration.baseUrl}` + 
        ``;

        const body = {
            login: login,
            files: files,
            taskName: taskName
        }

        const response = this._http.post(url, {
            Login: login, 
            TaskName: taskName, 
            Files: files
        })
        .toPromise();
        return response;
    }

    createGenerationTask (login: string, files: any, taskName: string) {

        let url = `${environment.apiServiceConfiguration.baseUrl}` + 
        ``;

        const body = {
            login: login,
            files: files,
            taskName: taskName
        }

        console.log(body);
        const response = this._http.post<string>(url, body)
        .toPromise();
        return response;
    }
    //#endregion

    //#region delete tasks
    deleteDetectionTaskById (login: string, taskId: number) {
        let url = `${environment.apiServiceConfiguration.baseUrl}` + 
        ``;

        return this._http.get(url);
    }

    deleteGenerationTaskById (login: string, taskId: number) {
        let url = `${environment.apiServiceConfiguration.baseUrl}` + 
        ``;

        return this._http.get(url);
    }
    //#endregion

    //#region get tasks

    async getDetectionTaskById (login: string, taskId: number): Promise<Task> {
        let url = `${environment.apiServiceConfiguration.baseUrl}` + 
        ``;
        const params = new HttpParams()
            .set('Login', login)
            .set('TaskId', String(taskId));
        var result = await this._http.get<Task>(url, {params: params}).toPromise();
        return result;
    }

    async getGenerationTaskById (login: string, taskId: number): Promise<Task> {
        let url = `${environment.apiServiceConfiguration.baseUrl}` + 
        ``;
        const params = new HttpParams()
            .set('Login', login)
            .set('TaskId', String(taskId));
        var result = await this._http.get<Task>(url, {params: params}).toPromise();
        return result;
    }

    async getAllTasksByLogin(login: string): Promise<Task[]> {
        
        let url = `${environment.apiServiceConfiguration.baseUrl}` + 
        ``;
        var result = await this._http.get<Task[]>(url).toPromise();
        return result;
    }
    //#endregion
}
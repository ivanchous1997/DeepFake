import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';


@Injectable({ providedIn: 'root' })
export class ApiService {

    constructor(
        private _http: HttpClient
    ) {}

    //detection
    createDetectionTask (login: any, files: any, settings: any) {

        let url = `${environment.apiServiceConfiguration.baseUrl}` + 
        ``;

        const body = {
            login: login,
            files: files,
            settings: settings
        }

        const response = this._http.post<string>(url, body)
        .toPromise();
        return response;
    }

    deleteDetectionTask (login: any, taskId: number) {
        let url = `${environment.apiServiceConfiguration.baseUrl}` + 
        ``;

        return this._http.get(url);
    }

    getDetectionTasks (login:any) {
        let url = `${environment.apiServiceConfiguration.baseUrl}` + 
        ``;

        return this._http.get(url);
    }

    //generation
    createGenerationTask (login: any, files: any, settings: any) {

        let url = `${environment.apiServiceConfiguration.baseUrl}` + 
        ``;

        const body = {
            login: login,
            files: files,
            settings: settings
        }

        const response = this._http.post<string>(url, body)
        .toPromise();
        return response;
    }

    deleteGenerationTask (login: any, taskId: number) {
        let url = `${environment.apiServiceConfiguration.baseUrl}` + 
        ``;

        return this._http.get(url);
    }

    getGenerationTasks (login:any) {
        let url = `${environment.apiServiceConfiguration.baseUrl}` + 
        ``;

        return this._http.get(url);
    }
}
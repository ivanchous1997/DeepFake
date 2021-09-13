import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Router } from "@angular/router";
import { AccountService, ApiService } from '@app/_services';
import { FormControl, Validators } from '@angular/forms';
import { Task } from "@app/_models/task/task";
import * as _ from 'lodash';

@Component({
    templateUrl: 'detection.component.html'
})
export class DetectionComponent implements OnInit{
    constructor(
        private accountService: AccountService,
        private apiService: ApiService
    ){
    }

    taskNameFormControl = new FormControl('', [
        Validators.required
      ]);

    isFilesInputInvalid = false;
    requieredFilesTypes = 'image/png,image/jpg,image/jpeg,video/mp4';
    files: any[] = [];

    taskName: string;
    taskNameExists = false;

    @ViewChild("fileDropRef", { static: false }) fileDropEl: ElementRef;

    ngOnInit() {
    }

    //#region files
    onFileDropped($event) {
        if(this.files.length < 1)
            this.prepareFilesList($event);
    }

    fileBrowseHandler(files) {
        if(this.files.length < 1)
            this.prepareFilesList(this.getRequiredTypeFiles(files));
        if(this.files.length > 0)
            this.isFilesInputInvalid = false;
    }

    deleteFile(index: number) {
        this.files.splice(index, 1);
        if(this.files.length == 0)
            this.isFilesInputInvalid = true;
    }

    prepareFilesList(files: Array<any>) {
        for (const item of files) {
            this.files.push(item);
        }
        this.fileDropEl.nativeElement.value = "";
    }

    formatBytes(bytes, decimals = 2) {
        if (bytes === 0) {
        return "0 Bytes";
        }
        const k = 1024;
        const dm = decimals <= 0 ? 0 : decimals;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    }

    getRequiredTypeFiles = (files) => {
        var checkedFiles = _.filter(files, (file) => {
            return _.some(this.requieredFilesTypes.trim().split(','), (elem) => {
                return elem == file.type;
            });
        });
        return checkedFiles;
    }
    //#endregion

    validateForm = () => {
        var valid = true;

        if(!this.taskName){
            this.taskNameFormControl.markAsTouched();
            valid = false;
        }
 
        if(this.files.length == 0) {
            this.isFilesInputInvalid = true;
            valid = false;
        }

        return valid;
    }

    onTaskNameChangedEvent(event: any){
        if(this.taskNameExists == true)
            this.taskNameExists = false;
    }


    //#region tasks
    initDetectionTask = () => {
        if(this.validateForm()){
            console.log(this.files);
            var reqResult = undefined;
            this.apiService.createDetectionTask(this.accountService.userValue.username, this.files, this.taskName).then((result: any) =>{
                reqResult = result.data;
            });
        }
    }

    initGenerationTask = () => {
        if(this.validateForm()){
            var reqResult = undefined;
            this.apiService.createGenerationTask(this.accountService.userValue.username, this.files, this.taskName).then((result: any) =>{
                reqResult = result.data;
            });
        }
    }
    //#endregion
}
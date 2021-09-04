import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AccountService } from '@app/_services';

@Component({
    templateUrl: 'detection.component.html',
})
export class DetectionComponent implements OnInit{
    constructor(
        private accountService: AccountService
    ){
    }

    userName: string;

    ngOnInit() {
        this.userName = this.accountService.userValue.firstName;
    }
}
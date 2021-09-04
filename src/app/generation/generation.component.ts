import { Component, OnInit } from "@angular/core";
import { AccountService } from "@app/_services/account.service";

@Component({
    templateUrl: 'generation.component.html',
})
export class GenerationComponent implements OnInit {
    constructor(
        private accountService: AccountService
    ) {}

    userName: string;

    ngOnInit() {
        this.userName = this.accountService.userValue.firstName;
    }
}
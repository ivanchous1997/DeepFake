import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from '@app/task/task.component';

import { ProfileComponent } from './profile.component'

const routes: Routes = [
    { path: '', component: ProfileComponent },
    { path: 'taskDetails', component: TaskComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule{ } 
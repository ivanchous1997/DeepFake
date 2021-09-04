import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenerationComponent } from './generation.component'

const routes: Routes = [
    {
        path: '', component: GenerationComponent,
        children: []
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GenerationRoutingModule{ } 
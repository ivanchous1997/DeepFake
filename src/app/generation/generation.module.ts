import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { GenerationRoutingModule } from './generation-routing.module'
import { GenerationComponent } from './generation.component'

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        GenerationRoutingModule
    ],
    declarations: [
        GenerationComponent
    ]
})
export class GenerationModule { }
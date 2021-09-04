import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DetectionRoutingModule } from './detection-routing.module'
import { DetectionComponent } from './detection.component'

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        DetectionRoutingModule,
    ],
    declarations: [
        DetectionComponent,
    ]
})
export class DetectionModule { }
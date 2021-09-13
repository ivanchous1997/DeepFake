import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatDialogModule } from '@angular/material/dialog';

import { DetectionRoutingModule } from './detection-routing.module'
import { DetectionComponent } from './detection.component'
import { ProgressComponent } from '@app/_components/progress/progress.component'


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        DetectionRoutingModule, 
        MatCheckboxModule,
        MatButtonModule,
        MatRadioModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        ScrollingModule,
        MatIconModule,
        MatDialogModule
    ],
    declarations: [
        DetectionComponent,
        ProgressComponent
    ]
})
export class DetectionModule {
    taskName: string;
 }
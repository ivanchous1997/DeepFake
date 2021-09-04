import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile';
import { AuthGuard } from './_helpers';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const generationModule = () => import('./generation/generation.module').then(x => x.GenerationModule);
const detectionModule = () => import('./detection/detection.module').then(x => x.DetectionModule);

const routes: Routes = [
    { path: '', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },
    { path: 'generation', loadChildren: generationModule, canActivate: [AuthGuard]},
    { path: 'detection', loadChildren: detectionModule, canActivate: [AuthGuard]},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
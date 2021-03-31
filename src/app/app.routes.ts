
import { RouterModule, Routes } from '@angular/router';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { FechasComponent } from './pages/fechas/fechas.component';

const APP_ROUTES: Routes = [
    { path: 'timeline', component: TimelineComponent },
    { path: 'fechas', component: FechasComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'timeline' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

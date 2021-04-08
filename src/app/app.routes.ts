
import { RouterModule, Routes } from '@angular/router';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { FechasComponent } from './pages/fechas/fechas.component';
import { ConvertidorComponent } from './pages/convertidor/convertidor.component';
import { EditorComponent } from './pages/editor/editor.component';

const APP_ROUTES: Routes = [
    { path: 'timeline', component: TimelineComponent },
    { path: 'fechas', component: FechasComponent },
    { path: 'convertir', component: ConvertidorComponent },
    { path: 'editor', component: EditorComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'timeline' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

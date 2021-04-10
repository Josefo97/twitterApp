import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from '@progress/kendo-angular-editor';
import { TemaModule } from './@tema/Tema.module';

//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios

// Componentes
import { AppComponent } from './app.component';

import { TimelineComponent } from './pages/timeline/timeline.component';
import { FechasComponent } from './pages/fechas/fechas.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ConvertidorComponent } from './pages/convertidor/convertidor.component';
import { EditorComponent } from './pages/editor/editor.component';


@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    FechasComponent,
    NavbarComponent,
    ConvertidorComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    TemaModule,
    NgxTwitterTimelineModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule,
    EditorModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

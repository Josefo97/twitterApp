import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios

// Componentes
import { AppComponent } from './app.component';

import { TemaModule } from './@tema/Tema.module';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { FechasComponent } from './pages/fechas/fechas.component';
import { NavbarComponent } from './pages/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    FechasComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    TemaModule,
    NgxTwitterTimelineModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { TemaModule } from './@tema/Tema.module';

import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    TemaModule,
    NgxTwitterTimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

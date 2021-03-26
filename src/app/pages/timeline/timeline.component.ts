import { Component, ElementRef, Input, OnInit } from '@angular/core';
import NgxTwitterTimelineData from '../../share/models/timeline-data.model';
import NgxTwitterTimelineOptions from '../../share/models/timeline-options.model';
import { element } from 'protractor';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  /*
  Los datos obtenidos de la definición del objeto para el contenido que se mostrara en el widget
  Puede ser una cadena de ID de widget para buscar en el la API timeline o un widget heredado
  */
  @Input() data: NgxTwitterTimelineData;

  // Un hash de opciones adicionales para configurar el widget.
  @Input() opts: NgxTwitterTimelineOptions;

  defaultOpts: NgxTwitterTimelineOptions = {
    tweetLimit: 5
  }

  defaulData: NgxTwitterTimelineData = {
    sourceType: 'url',
    url: 'https://twitter.com/John_Papa',
    screenName: 'John_Papa'
  }

  constructor( private element: ElementRef ) { }

  ngOnInit(): void {
  }

}

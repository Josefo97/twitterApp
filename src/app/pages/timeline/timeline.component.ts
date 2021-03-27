import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import NgxTwitterTimelineData from '../../share/models/timeline-data.model';
import NgxTwitterTimelineOptions from '../../share/models/timeline-options.model';
import { TimelineService } from '../../services/timeline.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  contador = 5;
  cantidadValores: number = 10;

  // Escroll infinito
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    
    const pos = ( document.documentElement.scrollTop || document.body.scrollTop ) + 800; // posicion de la ventana al hacer scroll
    const max = ( document.documentElement.scrollHeight || document.documentElement.scrollHeight ); // posicion maxima de la ventana

    if ( pos > max ) {
      this.cantidadValores = this.contador+5;
      console.log({ pos, max }, 'contador: ', this.cantidadValores);
    }

  }

  /*        ESTOS INPUTS FUNCIONAN AL USAR LOS SERVICIOS
  Los datos obtenidos de la definición del objeto para el contenido que se mostrara en el widget
  Puede ser una cadena de ID de widget para buscar en el la API timeline o un widget heredado
  */
  @Input() data: NgxTwitterTimelineData;

  // Un hash de opciones adicionales para configurar el widget.
  @Input() opts: NgxTwitterTimelineOptions;

  defaultOpts: NgxTwitterTimelineOptions = {
    tweetLimit: this.cantidadValores
  }

  defaultData: NgxTwitterTimelineData = {
    sourceType: 'url',
    url: 'https://twitter.com/John_Papa',
    screenName: 'John_Papa'
  }

  constructor( private element: ElementRef,
               private twitterService: TimelineService ) {
                // this.loadTwitterWidget();
                console.log(this.contador);
               }

  ngOnInit(): void {
  }

  ngOnChanges(): void {



    if (this.data && this.data.sourceType) {
      switch (this.data.sourceType) {
        case 'url':
          delete this.defaultData.screenName;
          break;
        case 'profile':
          delete this.defaultData.url;
          break;
        default:
          break;
      }
      this.loadTwitterWidget();
    }
  }

  loadTwitterWidget() {
    this.twitterService
      .loadScript()
      .subscribe(
        twttr => {
          let nativeElement = this.element.nativeElement;
          nativeElement.innerHTML = "";
          window['twttr']
            .widgets
            .createTimeline(
              { ...this.defaultData, ...this.data },
              nativeElement,
              { ...this.defaultOpts, ...this.opts }
            )
            .then(embed => {
              console.log(embed);
            })
            .catch(error => console.error(error))
        },
        err => console.error(err));
  }

}

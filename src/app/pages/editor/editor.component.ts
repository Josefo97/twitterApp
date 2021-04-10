import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  events: string[] = [];
  value;

  constructor() { }

  ngOnInit(): void {
  }

  public valueChange(value: any): void {
    this.log('valueChange', value);
  }

  private log(event: string, arg: any): void {
    this.events.push(`${event} ${arg || ''}`);
  }

}

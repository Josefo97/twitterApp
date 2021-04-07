import { Component, OnInit } from '@angular/core';
import { convertToHtml, extractRawText, convertToMarkdown } from "mammoth/mammoth.browser";
import { ConvercionService } from '../../services/convercion.service';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent implements OnInit {
    
  constructor( private fileConvert: ConvercionService ) {
  }

  ngOnInit(): void {
  }

  async con(files: FileList) {
    const c = await this.fileConvert.convertFile( files.item(0) );
    console.log('Resultado c: ', c );
  }


}

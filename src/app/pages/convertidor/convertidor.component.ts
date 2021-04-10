import { Component, OnInit } from '@angular/core';
// import { convertToHtml, extractRawText, convertToMarkdown } from "mammoth/mammoth.browser";
import { ConvercionService } from '../../services/convercion.service';
import * as mammoth from 'mammoth';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent implements OnInit {

  ResHTML = '';
    
  constructor( private fileConvert: ConvercionService ) {
  }

  ngOnInit(): void {
  }

  async con(files: FileList) {
    const c = await this.fileConvert.convertFile( files.item(0) );
    console.log('Resultado c: ', c );
  }

  convertFile( inputElement ){
    console.log(inputElement);
    
    var files = inputElement.srcElement.files || [];
      if (!files.length) return;
      var file = files[0];

      console.log(file);
      
  
      let reader = new FileReader();
      reader.onloadend = (event) => {
        let arrayBuffer = reader.result;
        // debugger
  
        // TODO error mammoth
        mammoth.convertToHtml({arrayBuffer: arrayBuffer}).then((resultObject) => {
          console.log(resultObject.value)
          this.ResHTML = resultObject.value;
        })
  
      };
      reader.readAsArrayBuffer(file);
  }


}

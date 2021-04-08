import { Injectable } from '@angular/core';
import { convertToHtml, extractRawText, convertToMarkdown } from "mammoth/mammoth.browser";

@Injectable({
  providedIn: 'root'
})
export class ConvercionService {

  constructor() { }

  async convertFile( file: File ): Promise<any> {
    let ResHTML: any;
    return new Promise<any>( (resolve) => {
      
      var reader = new FileReader();
      reader.onload = () => {
        
        const html: string | ArrayBuffer = reader.result;
        const docxToHMTL =  convertToHtml({ arrayBuffer: html }).then( ( resultObject ) => {
          ResHTML = resultObject.value;
          console.log( 'resultadoService: ', ResHTML );
        });
        // const upload = { nombre: file.name, file: docxToHMTL, size: file.size, type: file.type }
        const upload = { nombre: file.name, file: ResHTML, size: file.size, type: file.type }
        resolve(upload);
      };
      reader.readAsArrayBuffer(file);
    });

  }
}

import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FechasService } from '../../services/fechas.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fechas',
  templateUrl: './fechas.component.html',
  styleUrls: ['./fechas.component.css']
})
export class FechasComponent implements OnInit {

  formFechas: FormGroup;
  difereciaDias;

  constructor( 
              //  private dataPipe: DatePipe,
               private fechas: FechasService,
               private formBuilder: FormBuilder ) {
    
    let fecha = Date.now();
    let hoy = new Date(fecha).toUTCString();
    console.log('hoy es: ' ,hoy);
     
  }

  ngOnInit(): void {
    this.builForm();
  }
  
  get f(){
    return this.formFechas.controls;
  }

  private builForm() {
    this.formFechas = this.formBuilder.group({
      fechaInicio: '',
      fechaFinal: '',
      tipo: ''
    });
  }


  calcularDiferencia(){
    
    let inicio = new Date( this.f.fechaInicio.value ).toUTCString();
    let final = new Date( this.f.fechaFinal.value ).toUTCString();
    let tipo = this.f.tipo.value;

    //Dias
    this.difereciaDias = this.fechas.calcularDiferencia(tipo, new Date(inicio), new Date(final));
    console.log('Dias: ', this.difereciaDias, 'tipo: ', tipo);
  }


}

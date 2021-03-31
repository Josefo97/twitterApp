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

    //Dias
    this.difereciaDias = this.fechas.diferenciaDias(new Date('2015-4-18'), new Date('2015-4-15'));
    console.log('Dias: ', this.difereciaDias);

    //Meses
    let diferenciaMeses = this.fechas.diferenciaMeses(new Date('2015-6-18'), new Date('2015-3-15'));
    console.log('Meses: ', diferenciaMeses);
    
    // Años
    let anios = this.fechas.diferenciaAnios(new Date('2021-6-18'), new Date('2015-3-15'));
    console.log('Años', anios);
    
    // Horas
    let horas = this.fechas.diferenciaHoras(new Date(' Wed, 31 Mar 2021 00:21:05 GMT'), new Date(' Wed, 31 Mar 2021 00:22:05 GMT'));
    console.log('horas: ', horas);

    // Primer fecha es menor (true)
    let compararFechas = this.fechas.compararFechas(new Date('2021-1-16'), new Date(' Wed, 31 Mar 2021 00:21:05 GMT'));
    console.log('Comparar Fechas: ', compararFechas);
    
    let fecha = Date.now();
    let hoy = new Date(fecha).toUTCString();
    // let hoy = new Date(fecha);
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

  // diferencia( diaInicio: Date, diaFinal: Date ){
  diferencia(  ){
  
    // let inicio = diaInicio.getTime();
    // let final = diaFinal.getTime();

    let date_1 = new Date('2015-4-15').getTime();
    let date_2 = new Date('2015-5-15').getTime();
        
    // let diff_in_millisenconds = inicio - final;
    let diff_in_millisenconds = date_1 - date_2;
    let day_as_milliseconds = 86400000;
    let diff_in_days = diff_in_millisenconds / day_as_milliseconds;
    // this.dataPipe.transform(diff_in_days, 'dd-MM-yyyy HH:mm');
    
    console.log( 'diferencia metodo' , diff_in_days);
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

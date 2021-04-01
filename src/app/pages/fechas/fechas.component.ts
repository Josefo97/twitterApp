import { Component, OnInit } from '@angular/core';
import { FechasService } from '../../services/fechas.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fechas',
  templateUrl: './fechas.component.html',
  styleUrls: ['./fechas.component.css']
})
export class FechasComponent implements OnInit {

  formFechas: FormGroup;
  formSumaResta: FormGroup;

  difereciaDias: number;
  tipo: String;
  diferenciaFechasMenor: String;
  diferenciaFechasMayor: String;
  resultadoSuma;

  formatsDate: string[] = [
    'short',
    'medium',
    'long',
    'full',
    'shortDate',
    'mediumDate',
    'longDate',
    'fullDate',
    'shortTime',
    'mediumTime',
    'longTime',
    'fullTime'
  ];

  constructor(
    private fechasService: FechasService,
    private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.builForm();
    this.buildForm2();
  }

  get f() {
    return this.formFechas.controls;
  }
  get formatos() {
    return this.formSumaResta.controls;
  }

  private builForm() {
    this.formFechas = this.formBuilder.group({
      fechaInicio: [null, Validators.required],
      fechaFinal: [null, Validators.required],
      tipo: [null, Validators.required],
      diferencia: null,
      esMenor: null,
      esMayor: null
    });
  }

  private buildForm2() {
    this.formSumaResta = this.formBuilder.group({
      fecha: [null, Validators.required],
      tipoSumaFormato: [null, Validators.required],
      cantidadASumar: [null, Validators.required],
      operacion: ['suma', Validators.required],
      resultadoFecha: null,
    });
  }

  calcularDiferencia() {

    let inicio = new Date(this.f.fechaInicio.value).toUTCString();
    let final = new Date(this.f.fechaFinal.value).toUTCString();
    this.tipo = this.f.tipo.value;
    let datosService = this.fechasService.calcularDiferencia(this.tipo, new Date(inicio), new Date(final))

    //Dias
    this.difereciaDias = Math.round(datosService);
    console.log('Dias: ', datosService, 'tipo: ', this.tipo);
  }

  compararFechas() {
    let fecha1 = new Date(this.f.fechaInicio.value).toUTCString();
    let fecha2 = new Date(this.f.fechaFinal.value).toUTCString();

    let comparacion = this.fechasService.compararFechas(new Date(fecha1), new Date(fecha2));
    this.diferenciaFechasMenor = comparacion == true ? 'Si' : 'No';
    this.diferenciaFechasMayor = comparacion == true ? 'No' : 'Si';

  }

  sumar() {

    let tipoSuma = this.formatos.tipoSumaFormato.value;
    let sumarNumero = this.formatos.cantidadASumar.value;
    let fecha = new Date(this.formatos.fecha.value).toUTCString();
    let operacion = this.formatos.operacion.value;
    let tipoOperacion = operacion == 'suma' ? true : false
    
    console.log('datos para la operacion: ', tipoOperacion);

    let sumarDias = this.fechasService.tipoOperacion(tipoSuma, new Date(fecha), sumarNumero, tipoOperacion);
    

    let resultado = new Date(sumarDias).toUTCString();
    this.resultadoSuma = resultado;
    console.log('mensaje: ', this.resultadoSuma, ', dia: ', resultado);
  }

}

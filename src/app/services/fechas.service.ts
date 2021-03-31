import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FechasService {

  constructor() { }

  calcularDiferencia( tipo: String, fechaInicio?: Date, fechaFinal?: Date ) {

    let resultado: number;
    let tipoInvalido = 'Selecciona una unidad de medida';

    switch ( tipo == 'dias' || tipo == 'meses' || tipo == 'anios' || tipo == 'horas' || tipo == 'minutos' || tipo == '' ) {
      case tipo == 'dias':
        let diferenciaMilisegundos =  fechaFinal.getTime() - fechaInicio.getTime();
        let diasMilisegundos = 86400000;
        resultado = diferenciaMilisegundos / diasMilisegundos;

        return resultado;
        
      case tipo == 'meses':
        let diferenciaMeses = fechaFinal.getTime() - fechaInicio.getTime();
        let mesesMilisegundos = 2592000000;
        resultado = diferenciaMeses / mesesMilisegundos;

        return resultado;

      case tipo == 'anios':
        let diferenciaAnios = fechaFinal.getTime() - fechaInicio.getTime();
        let aniosMilisegundos = 31536000000;
        resultado = diferenciaAnios / aniosMilisegundos;

        return resultado;

      case tipo == 'horas':
        let diferenciaHoras = fechaFinal.getTime() - fechaInicio.getTime();
        let horasMilisegundos = 3600000;
        resultado = diferenciaHoras / horasMilisegundos;

        return resultado;
      case tipo == 'minutos':
        let diferenciaMinutos = fechaFinal.getTime() - fechaInicio.getTime();
        let minutosMilisegundos = 60000
        resultado = diferenciaMinutos / minutosMilisegundos;

        return resultado;
      case tipo == '':
        return tipoInvalido;
      default:
        return tipoInvalido;
    }
    
  }

  //TODO modificacion para el calculo de horas
  diferenciaHoras(horaInicio: Date, horaFinal: Date) {
    let diferenciaMilisegundos = horaFinal.getHours() - horaInicio.getHours();
    let horasMilisegundos = 3600000;
    
    let diferenciaHoras = diferenciaMilisegundos / horasMilisegundos
    return diferenciaHoras;
  }
  
  //TODO modificacion para el calculo de min
  diferenciaMinutos(minInicio: Date, minFinal: Date) {
    let diferenciaMilisegundos = minFinal.getTime() - minInicio.getTime();
    let minutosMilisegundos = 60000;

    let diferenciaMinutos = diferenciaMilisegundos / minutosMilisegundos
    return diferenciaMinutos;
  }

  compararFechas(fecha_1: Date, fecha_2: Date){
    if ( fecha_1.getTime() < fecha_2.getTime() ) {
      return true;
    } else {
      return false
    }
  }

}

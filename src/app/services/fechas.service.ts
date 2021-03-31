import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FechasService {

  constructor() { }

  calcularDiferencia( tipo: String, fechaInicio?: Date, fechaFinal?: Date ) {

    let resultado: number;

    switch ( tipo == 'dias' || tipo == 'meses' || tipo == 'anios' || tipo == 'horas' || tipo == 'minutos' ) {
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
      default:
        return 0;
    }
    
  }

  tipoOperacion( tipo: String, fecha: Date, cantidad: number, operacion: boolean ) {

    let resultado: number;

    switch ( tipo == 'dias' || tipo == 'meses' || tipo == 'anios' || tipo == 'horas' || tipo == 'minutos' ) {
      case tipo == 'dias':
        let diaObtenido = fecha.getTime();
        let diasMilisegundos = 86400000;

        let dias = cantidad * diasMilisegundos;
        
        if ( operacion ) {
          resultado = diaObtenido + dias;
        } else {
          resultado = diaObtenido - dias;
        }

        return resultado;
        
      case tipo == 'meses':
        let mesObtenido = fecha.getTime();
        let mesesMilisegundos = 2629750000;

        let meses = cantidad * mesesMilisegundos;

        if ( operacion ) {
          resultado = mesObtenido + meses;
        } else {
          resultado = mesObtenido - meses;
        }

        return resultado;

      case tipo == 'anios':
        let anioObtenido = fecha.getTime();
        let aniosMilisegundos = 31557600000;

        let anios = cantidad * aniosMilisegundos;

        if ( operacion ) {
          resultado = anioObtenido + anios;
        } else {
          resultado = anioObtenido - anios;
        }

        return resultado;

      case tipo == 'horas':
        let horasObtenidas = fecha.getTime();
        let horasMilisegundos = 3600000;

        let horas = cantidad * horasMilisegundos;

        if ( operacion ) {
          resultado = horasObtenidas + horas;
        } else {
          resultado = horasObtenidas - horas;
        }

        return resultado;

      case tipo == 'minutos':
        let minutosObtenidos = fecha.getTime();
        let minutosMilisegundos = 60000

        let minutos = cantidad * minutosMilisegundos;

        if ( operacion ) {
          resultado = minutosObtenidos + minutos;
        } else {
          resultado = minutosObtenidos - minutos;
        }

        return resultado;

      default:
        break;
    }
  }

  compararFechas(fecha_1: Date, fecha_2: Date){
    if ( fecha_1.getTime() < fecha_2.getTime() ) {
      return true;
    } else {
      return false
    }
  }

}
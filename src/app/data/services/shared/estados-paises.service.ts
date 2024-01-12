import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadosPaisesService {

  getPaises(): Observable<any[]>{
    const paises = [
      {codigo: 'MX', nombre: 'México'},
      {codigo: 'USA', nombre: 'Estados Unidos'},

    ];
    return of(paises);
  }

  getEstados(paisCodigo: string): Observable<any[]>{
    const estadosMexico = [
      {id: 1, nombre: 'Nayarit'},
      {id: 2, nombre: 'Sinaloa'},
      {id: 3, nombre: 'Jalisco'},
      {id: 4, nombre: 'Sonora'}
    ];

    const estadosUSA = [
      {id: 1, nombre: 'California'},
      {id: 2, nombre: 'Florida'}
    ];

    switch(paisCodigo) {
      case 'MX':
        return of(estadosMexico);
      case 'USA':
        return of(estadosUSA);
      default:
        return of([]);
    }
  }

}

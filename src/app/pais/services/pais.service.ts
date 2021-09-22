import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v2'; // URL de la api
  // private apiUrl: string = 'https://restcountrxies.eu/rest/v2'; // URL de la api antigua
  constructor(
    private http: HttpClient //importamos el servicio de http para las peticiones a la api
  ) {}

  buscarPais(termino: string): Observable<any> {
    const url = `${this.apiUrl}/name/${termino}`;

    return this.http.get(url); // si queremos que esto se ejecute tiene que tener un .subscribe() pero la informacion no la queremos mandar dentro del servicio sino al componente que quiere buscar el país
  }
}

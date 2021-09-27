import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  
  private apiUrl: string = 'https://restcountries.com/v3'; // URL de la api
  // private apiUrl: string = 'https://restcountrxies.eu/rest/v2'; // URL de la api antigua
  // d421c79edca7ee9341ab0587143ce021;

  constructor(
    private http: HttpClient //importamos el servicio de http para las peticiones a la api
  ) {}

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;

    return this.http.get<Country[]>(url); // si queremos que esto se ejecute tiene que tener un .subscribe() pero la informacion no la queremos mandar dentro del servicio sino al componente que quiere buscar el país
  }
  
  /*
  private apiUrl: string = 'http://api.countrylayer.com/v2';
  private apiKey: string = 'd421c79edca7ee9341ab0587143ce021';
  constructor(private http: HttpClient) {}

  buscarPais(termino: string): Observable<any> {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get(url, {
      params: {
        access_key: this.apiKey,
      },
    });
  }
  */
}

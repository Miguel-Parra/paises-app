import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private _apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(
    private _httpClient: HttpClient
  ) { }

  buscarPais(termino: string): Observable<Country[]> {
    const url: string = `${this._apiUrl}/name/${termino}`;
    return this._httpClient.get<Country[]>(url);
  }
  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this._apiUrl}/capital/${ termino }`;
    return this._httpClient.get<Country[]>(url);
  }

  buscarPaisId(id: string): Observable<Country[]>{
    const url = `${this._apiUrl}/alpha/${id}`;
    return this._httpClient.get<Country[]>(url);
  }
  
}

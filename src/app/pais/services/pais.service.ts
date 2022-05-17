import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private _apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParms() {
    return new HttpParams().set('fields', 'name,capital,population,flags,ccn3')
  }

  constructor(
    private _httpClient: HttpClient
  ) { }

  buscarPais(termino: string): Observable<Country[]> {
    const url: string = `${this._apiUrl}/name/${termino}`;
    return this._httpClient.get<Country[]>(url, { params: this.httpParms });
  }
  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this._apiUrl}/capital/${termino}`;
    return this._httpClient.get<Country[]>(url, { params: this.httpParms });
  }

  buscarPaisId(id: string): Observable<Country[]> {
    const url = `${this._apiUrl}/alpha/${id}`;
    return this._httpClient.get<Country[]>(url)
    .pipe(
      tap(console.log)
    )
  }

  buscarPorRegion(region: string): Observable<Country[]> {
    const url = `${this._apiUrl}/region/${region}`;
    return this._httpClient.get<Country[]>(url, { params: this.httpParms })
      .pipe(
        tap(console.log)
      )
  }

}

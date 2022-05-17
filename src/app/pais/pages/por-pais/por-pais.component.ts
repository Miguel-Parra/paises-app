import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `li {
      cursor: pointer
    }
    `
  ]
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];

  constructor(private _paisService: PaisService) { }

  buscar(termino: string): void {
    this.hayError = false;
    this.paisesSugeridos = [];
    this.termino = termino;
    this.paises = [];
    console.log(this.termino);
    const busqueda = this._paisService.buscarPais(this.termino);
    busqueda.subscribe(
      (paises) => {
        this.paises = paises;
        this.termino = '';
      },
      (error) => {
        console.log(error);
        this.hayError = true;
      })
  }

  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this._paisService.buscarPais(termino)
    .subscribe(
      paises => this.paisesSugeridos = paises.splice(0,5),
      error => {
        this.paisesSugeridos = [];
        this.paises = [];
        this.hayError = true;
      }
    )
    

  }
}

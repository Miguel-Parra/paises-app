import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private _paisService: PaisService) { }

  buscar(termino: string): void {
    this.hayError = false;
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
    

  }
}

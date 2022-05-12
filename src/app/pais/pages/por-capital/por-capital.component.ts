import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
})
export class PorCapitalComponent {
  hayError: boolean = false;
  paises: Country[] = [];
  termino: string = '';

  constructor(private _paisService: PaisService) { }

  buscar(termino: string) {
    this.hayError = false;
    this.paises = [];
    this.termino = termino;
    this._paisService.buscarCapital(termino)
      .subscribe(
        (paises) => { this.paises = paises },
        (error) => { this.hayError = true })
  }


}

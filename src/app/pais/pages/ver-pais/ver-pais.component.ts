import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from "rxjs";
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  pais!: Country  //'!' --> pide a TypeScript que confie en nosotros

  constructor(
    private _activatedaRoute: ActivatedRoute,
    private _paisService: PaisService
  ) { }

  ngOnInit(): void {
    this._activatedaRoute.params
      .pipe(
        switchMap(({ idPais }) => this._paisService.buscarPaisId(idPais)),
        // switchMap(( parametros) => this._paisService.buscarPaisId(parametros['idPais']))
        tap(console.log)
      )
      .subscribe(
        (pais) => this.pais = pais[0],
        error => {
          console.log('ERROR VER PAIS');
          console.log(error);
        })
  }

}

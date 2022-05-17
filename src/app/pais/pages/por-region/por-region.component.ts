import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
  button {
    margin-right: 2.5px
  }
  `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(private _paisService: PaisService) { }

  getClaseCSS(region: string): string {
    return (region === this.regionActiva)
      ? 'btn btn-primary' :
      'btn btn-outline-primary'
  }

  activaRegion(regionSeleccionada: string) {
    if(this.regionActiva === regionSeleccionada) return; //para no cargar nuevamente
    this.regionActiva = regionSeleccionada
    this.paises = []; //para mejorar la visualizacion de respuesta
    this._paisService.buscarPorRegion(regionSeleccionada)
    .subscribe(
      paises => this.paises = paises,
      error => console.warn
    )
  }



}

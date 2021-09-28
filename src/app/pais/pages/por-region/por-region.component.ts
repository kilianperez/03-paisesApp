import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [],
})
export class PorRegionComponent {
  regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionActiva: string = '';
  paises: Country[] = [];
  hayError: boolean = false;
  constructor(
    private paisService:PaisService
  
    ) {}
  getClaseCSS(region: string): string {
    return region === this.regionActiva ? 'btn-primary' : 'btn-outline-primary';
  }
  activarRegion(region: string) {
    if (region === this.regionActiva) {
      return;
    }
    this.regionActiva = region;
    this.paises = [];

    // TODO: hacer el llamado al servicio
        this.paisService.buscarPorRegion(this.regionActiva).subscribe(
          (paises) => {
            // console.log(paises);
            this.paises = paises;
          },
          (error) => {
            // console.log(error);
            // console.log('error');
            this.hayError = true;
            this.paises = [];
          }
        );
  }
  // buscar(regionActiva: string) {
  //   // capturamos lo que viene por el formulario
  //   this.hayError = false;
  //   console.log(this.regionActiva);
  //   this.regionActiva = regionActiva;


  // }
}

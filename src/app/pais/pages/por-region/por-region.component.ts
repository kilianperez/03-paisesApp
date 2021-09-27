import { Component } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl:'./por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  regionActiva: string = '';
  constructor() { }
  getClaseCSS(region:string):string{
    return ((region === this.regionActiva) ? 'btn-primary' : 'btn-outline-primary');
  }
  activarRegion(region: string){
    this.regionActiva= region;
    // TODO: hacer el llamado al servicio
  }

}

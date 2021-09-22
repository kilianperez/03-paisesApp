import { Component } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent{

  termino: string = ''

  constructor() { }

  buscar(){ // capturamos lo que viene por el formulario
    console.log(this.termino);
  }

}

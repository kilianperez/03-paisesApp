import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent{

  termino: string = ''
  hayError: boolean = false;

  constructor( 
    private paisService: PaisService // Importamos el servicio del pais para poder tener acceso a la api
  ) { }

  buscar(){ // capturamos lo que viene por el formulario
    this.hayError = false
    console.log(this.termino);
    this.paisService.buscarPais(this.termino).subscribe((resp) =>{ // recibimos la respuesta de la api del servicio
        console.log(resp);

      }, error =>{ 
        console.log(error);
        console.log('error');
        this.hayError = true;
      }); 
  }

}

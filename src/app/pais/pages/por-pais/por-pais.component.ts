import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent{

  termino: string = ''
  hayError: boolean = false;
  paises : Country[] = []

  constructor( 
    private paisService: PaisService // Importamos el servicio del pais para poder tener acceso a la api
  ) { }

  buscar(){ // capturamos lo que viene por el formulario
    this.hayError = false
    console.log(this.termino);
    this.paisService.buscarPais(this.termino).subscribe((paises) =>{ // recibimos la respuesta de la api del servicio
        console.log(paises);

        // if (paises.status === 404 ) { // TODO: Parche para saber el error
        //   console.log('Parche error');
        //   this.hayError = true;
        // }
        this.paises = paises;

      }, error =>{ // TODO: No esta recibiendo el error
        console.log(error);
        console.log('error');
        this.hayError = true;
        this.paises = []
      }); 
  }

}

import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li{
      cursor: pointer;
    }
  `
  ]
})
export class PorPaisComponent{

  termino: string = ''
  hayError: boolean = false;
  paises : Country[] = []
  placeholder: string = "Buscar por país...";
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false

  constructor( 
    private paisService: PaisService // Importamos el servicio del pais para poder tener acceso a la api
  ) { }

  buscar(termino: string){ // capturamos lo que viene por el formulario
    this.mostrarSugerencias = false;
    this.hayError = false
    this.termino = termino;
    this.mostrarSugerencias = false;

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
  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino
    this.mostrarSugerencias = true;
    console.log(termino);
    this.paisService.buscarPais(termino)
    .subscribe(paises => this.paisesSugeridos = paises.splice(0,5),
    (err)=> this.paisesSugeridos = []) 
  }

  buscarSugerido(termino: string){
    this.buscar(termino)


   
  }
}

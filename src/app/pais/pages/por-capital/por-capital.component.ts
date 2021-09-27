import { Component} from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [],
})
export class PorCapitalComponent {
  termino: string = '';
  hayError: boolean = false;
  capitales: Country[] = [];
  placeholder: string = "Buscar por capital..."
  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    // capturamos lo que viene por el formulario
    this.hayError = false;
    console.log(this.termino);
    this.termino = termino;

    this.paisService.buscarCapital(this.termino).subscribe(
      (capitales) => {
        console.log(capitales);
        this.capitales = capitales;
      },
      (error) => {
        console.log(error);
        console.log('error');
        this.hayError = true;
        this.capitales = [];
      }
    );
  }
  sugerencias(termino: string) {
    this.hayError = false;
    // TODO: crear sugerencias
  }
}

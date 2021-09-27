import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country; // con el interrogante le decimos que puede ser nulo
  constructor(
    private activateRoute: ActivatedRoute, // todo lo necesario para suscribirnos a los cambios de la url
    private paisService  : PaisService 
    ) { }

  ngOnInit(): void {// buen lugar para suscribirnos a los cambios que se producen en la url

    // this.activateRoute.params
    // .subscribe(params =>{
    //   console.log(params.id);
    //   this.paisService.getPaisPorAlpha(params.id)
    //     .subscribe(pais=>{
    //       console.log(pais);
    //     })
      
    // })

    // Resumir lo anterior

    this.activateRoute.params
      .pipe(
        switchMap(({id})=>this.paisService.getPaisPorAlpha(id)),
        tap(console.log)
      )
      .subscribe(pais => this.pais = pais[0])
  
  } 

}

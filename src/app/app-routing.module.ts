import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [
  {
    path: '', // ruta del path (home)
    component: PorPaisComponent, // componete de la ruta
    pathMatch: 'full', // hacer que esta ruta sea la principal
  },
  {
    path: 'region',
    component: PorRegionComponent,
  },
  {
    path: 'capital',
    component: PorCapitalComponent,
  },
  {
    path: 'pais/:id', // con los dos puntos se vuelve dinámico, el id son los parametros que vamos a recibir
    component: VerPaisComponent,
  },
  {
    path: '**', // indicamos que cualquier otro path de los que no se indiquen
    redirectTo: '' // página a la que redireccionamos si no existe (home)
  }

];


@NgModule({
    imports:[
        RouterModule.forRoot(routes) // hace las configuraciones de la rutas creadas
    ],
    exports:[
        RouterModule // Tenemos que exportarlo para que funcione
    ]
})
export class AppRoutingModule{} // Tenemos que importarlo en el app.module.ts
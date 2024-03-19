import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ImagenesComponent } from './imagenes/imagenes.component';

const routes: Routes = [
  {path: '' , component: InicioComponent},
  {path:'imagenes' ,component:ImagenesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/pages/inicio/inicio.component';
import { RegistrarUsuarioComponent } from './components/pages/registrar-usuario/registrar-usuario.component';
import { Prueba1Component } from './components/pages/prueba1/prueba1.component';
import { Prueba2Component } from './components/pages/prueba2/prueba2.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'registrar/:id', component: RegistrarUsuarioComponent },
  { path: 'prueba1', component: Prueba1Component },
  { path: 'prueba2', component: Prueba2Component },
  { path: '**', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

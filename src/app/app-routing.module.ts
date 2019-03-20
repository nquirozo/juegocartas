import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MesaJuegoComponent } from './components/mesa-juego/mesa-juego.component';

const routes: Routes = [
  {path: 'mesa', component: MesaJuegoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { MesaJuegoComponent } from './components/mesa-juego/mesa-juego.component';
import { JugadorComponent } from './components/jugador/jugador.component';
import { CartaComponent } from './components/carta/carta.component';
import { ManoComponent } from './components/mano/mano.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    MesaJuegoComponent,
    JugadorComponent,
    CartaComponent,
    ManoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

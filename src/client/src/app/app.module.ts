import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { routing, appRoutingProviders } from './app.routing';

import {ValoracionesService} from './shared/services/valoraciones.service';

import { AppComponent } from './app.component';
// import { ServicesComponent } from './servicio/';
import { ValoracionesComponent } from './valoracion/valoraciones.component';
import {ServicesService} from './shared/services/services.service';
import {UserService} from './shared/services/user.service';
import { NavComponent } from './shared/layout/nav.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EvaluarComponent } from './valoracion/evaluar.component';

@NgModule({
  declarations: [
    AppComponent,
    // ServicesComponent,
    ValoracionesComponent,
    NavComponent,
    PerfilComponent,
    EvaluarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
  ],
  providers: [
    ValoracionesService,
    ServicesService,
    appRoutingProviders,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

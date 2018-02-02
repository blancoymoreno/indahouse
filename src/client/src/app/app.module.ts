import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { routing, appRoutingProviders } from './app.routing';

import {ValoracionesService} from './services/valoraciones.service';

import { AppComponent } from './app.component';
import { ServicesComponent } from './components/services/services.component';
import { ValoracionesComponent } from './components/servicios/valoraciones/valoraciones.component';
import {ServicesService} from './services/services.service';
import { NavComponent } from './components/servicios/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    ValoracionesComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
  ],
  providers: [
    ValoracionesService,
    ServicesService,
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

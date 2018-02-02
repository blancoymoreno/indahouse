import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ValoracionesService} from './services/valoraciones.service';

import { AppComponent } from './app.component';
import { ServicesComponent } from './components/services/services.component';
import { ValoracionesComponent } from './components/valoraciones/valoraciones.component';
import {ServicesService} from './services/services.service';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    ValoracionesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ValoracionesService,
    ServicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

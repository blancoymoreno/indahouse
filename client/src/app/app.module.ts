import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { routing, appRoutingProviders } from './app.routing';

import { FormsModule } from '@angular/forms';

import {ValoracionesService} from './shared/services/valoraciones.service';
import { AppComponent } from './app.component';
import {UserService} from './shared/services/user.service';
//import { NavComponent } from './shared/layout/nav.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EvaluarComponent } from './valoracion/evaluar.component';
import { HttpModule } from '@angular/http';
//import { LoggedNavComponent } from './logged-nav/logged-nav.component';
import { UserEditComponent } from './components/user-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    EvaluarComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    FormsModule,
    HttpModule
  ],
  providers: [
    ValoracionesService,
    appRoutingProviders,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { routing, appRoutingProviders } from './app.routing';

import { FormsModule } from '@angular/forms';

import {ValoracionesService} from './shared/services/valoraciones.service';
import { AppComponent } from './app.component';
import {UserService} from './shared/services/user.service';
import { PerfilComponent } from './perfil/perfil.component';
import { EvaluarComponent } from './valoracion/evaluar.component';
import { HttpModule } from '@angular/http';

import { HomeComponent } from './components/home.component';
import { UserEditComponent } from './components/user-edit.component';
import { CategoryListComponent } from './components/category-list.component';
import { CategoryAddComponent } from './components/category-add.component';
import { CategoryEditComponent } from './components/category-edit.component';
import { CategoryDetailComponent } from './components/category-detail.component';
import { ServiceAddComponent } from './components/service-add.component';
import { ServiceEditComponent } from './components/service-edit.component';
import { ServiceDetailComponent } from './components/service-detail.component';
import { InformacionEditComponent } from './components/informacion-edit.component';
import { ConfigurarPerfilMenuComponent } from './components/configurar-perfil-menu.component';
//Componentes de landing
import { BuscarServicioComponent } from './components/landing/buscar-servicio.component';
import { OfreceServiciosComponent } from './components/landing/ofrece-servicios.component';
import { ComoFuncionaComponent } from './components/landing/como-funciona.component';
import { PerfilDetailComponent } from './components/perfil-detail.component';
import { MisMensajesComponent } from './components/mis-mensajes.component';

//modulo custom
import { MessagesModule } from './messages/messages.module';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    EvaluarComponent,
    UserEditComponent,
    CategoryListComponent,
    HomeComponent,
    CategoryAddComponent,
    ServiceAddComponent,
    ServiceEditComponent,
    CategoryEditComponent,
    CategoryDetailComponent,
    ServiceDetailComponent,
    InformacionEditComponent,
    ConfigurarPerfilMenuComponent,
    BuscarServicioComponent,
    OfreceServiciosComponent,
    ComoFuncionaComponent,
    PerfilDetailComponent,
    MisMensajesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    routing,
    MessagesModule
  ],
  providers: [
    ValoracionesService,
    appRoutingProviders,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

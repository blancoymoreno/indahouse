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


@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    EvaluarComponent,
    UserEditComponent,
    CategoryListComponent,
    HomeComponent,
    CategoryAddComponent,
    CategoryEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    ValoracionesService,
    appRoutingProviders,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

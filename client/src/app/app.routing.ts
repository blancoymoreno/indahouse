import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilComponent } from './perfil/perfil.component';
// import usuario
import { UserEditComponent } from './components/user-edit.component';
import { PerfilDetailComponent } from './components/perfil-detail.component';
import { InformacionEditComponent } from './components/informacion-edit.component';
import { MisMensajesComponent } from './components/mis-mensajes.component';

//import categorias
import { CategoryListComponent } from './components/category-list.component';
import { CategoryAddComponent } from './components/category-add.component';
import { CategoryEditComponent } from './components/category-edit.component';
import { CategoryDetailComponent } from './components/category-detail.component';

//import servicio
import { ServiceAddComponent } from './components/service-add.component';
import { ServiceEditComponent } from './components/service-edit.component';
import { ServiceDetailComponent } from './components/service-detail.component';

//import evaluaciones
import { EvaluarComponent } from './valoracion/evaluar.component';//cambiar url

//import home
import { HomeComponent } from './components/home.component';
//landing
import { BuscarServicioComponent } from './components/landing/buscar-servicio.component';
import { OfreceServiciosComponent } from './components/landing/ofrece-servicios.component';
import { ComoFuncionaComponent } from './components/landing/como-funciona.component';


const appRoutes: Routes = [
  //{path: 'usuario/:idUser', component: PerfilComponent},
  {path: 'usuario/:id', component: PerfilDetailComponent},
  {path: 'categorias/:page', component: CategoryListComponent},
  {path: 'crear-categoria', component: CategoryAddComponent},
  {path: 'editar-categoria/:id', component: CategoryEditComponent},
  {path: 'categoria/:id', component: CategoryDetailComponent},
  {path: 'crear-servicio/:category', component: ServiceAddComponent},
  {path: 'editar-servicio/:id', component: ServiceEditComponent},
  {path: '', component: HomeComponent},
  {path: 'mis-datos', component: UserEditComponent},
  {path: 'mis-mensajes', component: MisMensajesComponent},
  {path: 'informacion-perfil', component: InformacionEditComponent},
  {path: 'informacion-perfil', component: UserEditComponent},
  {path: 'imagen-perfil', component: UserEditComponent},
  {path: 'mis-evaluaciones', component: EvaluarComponent},
  {path: 'servicio/:id', component: ServiceDetailComponent},
  {path: 'buscar-servicios', component: BuscarServicioComponent},
  {path: 'ofrece-tus-servicios', component: OfreceServiciosComponent},
  {path: 'como-funciona', component: ComoFuncionaComponent},
  {path: '**', component: BuscarServicioComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

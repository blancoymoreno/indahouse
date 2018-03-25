import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilComponent } from './perfil/perfil.component';
// import usuario
import { UserEditComponent } from './components/user-edit.component';

//import categorias
import { CategoryListComponent } from './components/category-list.component';

const appRoutes: Routes = [
  {path: 'perfil/:idUser', component: PerfilComponent},
  {path: 'categorias/:page', component: CategoryListComponent},
  {path: '', component: CategoryListComponent},
  {path: 'mis-datos', component: UserEditComponent},
  {path: 'informacion-perfil', component: UserEditComponent},
  {path: 'imagen-perfil', component: UserEditComponent},
  {path: 'evaluaciones', component: UserEditComponent},
  {path: '**', component: CategoryListComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

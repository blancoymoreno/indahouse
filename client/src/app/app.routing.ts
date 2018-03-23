import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilComponent } from './perfil/perfil.component';
import { UserEditComponent } from './components/user-edit.component';

const appRoutes: Routes = [
  {path: 'perfil/:idUser', component: PerfilComponent},
  //{path: '', component: UserEditComponent},
  {path: 'mis-datos', component: UserEditComponent},
  {path: 'informacion-perfil', component: UserEditComponent},
  {path: 'imagen-perfil', component: UserEditComponent},
  {path: 'evaluaciones', component: UserEditComponent},
  //{path: '**', component: UserEditComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

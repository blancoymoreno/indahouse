import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importar componentes
import { PerfilComponent } from './perfil/perfil.component';

const appRoutes: Routes = [
  {path: 'perfil/:idUser', component: PerfilComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

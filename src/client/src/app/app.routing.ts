import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importar componentes
import { ValoracionesComponent } from './components/servicios/valoraciones/valoraciones.component';

const appRoutes: Routes = [
  {path: 'valoraciones', component: ValoracionesComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

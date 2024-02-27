import { Routes } from '@angular/router';
import { vehicleResolver } from './resolvers/vehicle.resolver';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'vehicles',
  },
  {
    path: 'vehicles',
    loadComponent: () =>
      import('./components/vehicle/vehicles.component').then(
        (m) => m.VehiclesComponent,
      ),
    canActivate: [authGuard],
  },
  {
    path: 'vehicles/:vehicleId',
    loadComponent: () =>
      import('./components/measurement/measurement.component').then(
        (m) => m.MeasurementComponent,
      ),
    resolve: { vehicleData: vehicleResolver },
    canActivate: [authGuard],
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./components/auth/auth.component').then((m) => m.AuthComponent),
    canActivate: [authGuard],
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./components/about/about.component').then(
        (m) => m.AboutComponent,
      ),
  },
];

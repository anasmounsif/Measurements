import { Routes } from '@angular/router';
import { vehicleResolver } from './resolvers/vehicle.resolver';

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
  },
  {
    path: 'vehicles/:vehicleId',
    loadComponent: () =>
      import('./components/measurement/measurement.component').then(
        (m) => m.MeasurementComponent,
      ),
    resolve: { vehicleData: vehicleResolver },
  },
];

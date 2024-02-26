import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { VehicleService } from '../services/vehicle.service';
import { Vehicle } from '../interfaces/vehicle';
import { catchError } from 'rxjs';
import { handleError } from '../utils/errorHandler';

export const vehicleResolver: ResolveFn<Vehicle | null> = (route, state) => {
  const vehicleService: VehicleService = inject(VehicleService);
  const id = route.params['vehicleId'];

  return vehicleService.getVehicle(+id).pipe(catchError(handleError(null)));
};

import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { inject } from '@angular/core';
import { VehicleService } from '../services/vehicle.service';
import { Vehicle } from '../interfaces/vehicle';
import { catchError } from 'rxjs';
import { handleError } from '../utils/errorHandler';

export const vehicleResolver: ResolveFn<Vehicle | null> = (
  route: ActivatedRouteSnapshot,
  _: RouterStateSnapshot,
) => {
  const vehicleService: VehicleService = inject(VehicleService);
  const id = route.params['vehicleId'];

  // Returns vehicle details, if it doesn't find it, it returns null
  return vehicleService.getVehicleById(+id).pipe(catchError(handleError(null)));
};

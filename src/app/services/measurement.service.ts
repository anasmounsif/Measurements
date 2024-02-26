import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Measurement } from '../interfaces/measurement';
import { handleError } from '../utils/errorHandler';

@Injectable({
  providedIn: 'root',
})
export class MeasurementService {
  private readonly BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getMeasurementsByVehicleId(vehicleId: number): Observable<Measurement[]> {
    return this.http
      .get<
        Measurement[]
      >(`${this.BASE_URL}/measurements?vehicleId=${vehicleId}`)
      .pipe(catchError(handleError<Measurement[]>([])));
  }
}

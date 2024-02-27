import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Vehicle } from '../interfaces/vehicle';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private readonly BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${this.BASE_URL}/vehicles`);
  }

  getVehicleById(id: number): Observable<Vehicle> {
    return this.http.get<Vehicle[]>(`${this.BASE_URL}/vehicles?id=${id}`).pipe(
      map((vehicles: Vehicle[]) => {
        if (vehicles.length === 0) {
          throw new Error('No vehicle found.');
        }
        // Json-server returns an array, so getting the first one
        return vehicles[0];
      }),
    );
  }
}

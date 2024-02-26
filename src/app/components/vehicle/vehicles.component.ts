import { Component, OnDestroy, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { Vehicle } from '../../interfaces/vehicle';
import { catchError, EMPTY, Observable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-car-measurement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehicles.component.html',
})
export class VehiclesComponent implements OnInit, OnDestroy {
  vehicles$!: Observable<Vehicle[]>;
  private _subscriptions: Subscription = new Subscription();

  constructor(
    private vehicleService: VehicleService,
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title,
  ) {
    this.titleService.setTitle('Vehicles');
  }

  ngOnInit(): void {
    this.getVehicles();
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

  navigateToMeasurements(vehicleId: number) {
    this.router
      .navigate([vehicleId], { relativeTo: this.route })
      .catch((error) => console.error('Error during navigation:', error));
  }

  private getVehicles() {
    this.vehicles$ = this.vehicleService.getVehicles().pipe(
      catchError((error: Error) => {
        alert(error.message);
        return EMPTY;
      }),
    );
  }
}

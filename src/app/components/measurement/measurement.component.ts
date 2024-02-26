import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe, DatePipe, NgForOf } from '@angular/common';
import { Measurement } from '../../interfaces/measurement';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from '../../interfaces/vehicle';
import { Title } from '@angular/platform-browser';
import { MeasurementService } from '../../services/measurement.service';

@Component({
  selector: 'app-measurements',
  standalone: true,
  imports: [NgForOf, DatePipe, AsyncPipe],
  templateUrl: './measurement.component.html',
})
export class MeasurementComponent implements OnInit {
  measurements$!: Observable<Measurement[]>;
  vehicle!: Vehicle;

  constructor(
    private measurementService: MeasurementService,
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title,
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  /**
   * Retrieves the vehicle data from the Angular route resolver associated with the current route
   * and initializes the display of vehicle details, including its measurements.
   * If the vehicle is not found (e.g., data not available in the route),
   * the user is redirected to the vehicle list.
   */
  private fetchData() {
    this.vehicle = this.route.snapshot.data['vehicleData'];

    if (!this.vehicle) {
      this.goToVehicles();
      return;
    }

    // Sets tab title with vehicle's make value
    this.titleService.setTitle(this.vehicle?.make + ' | Measurements');

    this.measurements$ = this.measurementService.getMeasurementsByVehicleId(
      this.vehicle.id,
    );
  }

  private goToVehicles() {
    this.router
      .navigate(['/vehicles'])
      .catch((error) => alert('Error during navigation: ' + error));
  }
}
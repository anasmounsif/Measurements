import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe, DatePipe, NgForOf } from '@angular/common';
import { Measurement } from '../../interfaces/measurement';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from '../../interfaces/vehicle';
import { Title } from '@angular/platform-browser';
import { MeasurementService } from '../../services/measurement.service';
import { HeadlineColorDirective } from '../../directives/headline-color.directive';
import { handleError } from '../../utils/errorHandler';

@Component({
  selector: 'app-measurements',
  standalone: true,
  imports: [NgForOf, DatePipe, AsyncPipe, HeadlineColorDirective],
  templateUrl: './measurement.component.html',
})
export class MeasurementComponent implements OnInit {
  /**
   * {@link measurements$} used as an async pipe.
   */
  measurements$!: Observable<Measurement[]>;
  vehicle: Vehicle | undefined;

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
   * Fetches vehicle data and initializes page content.
   *
   * @remarks
   * This method retrieves the vehicle measurements from the current route's resolved data and checks for its existence.
   * If the vehicle data is not present, it redirects to the vehicles listing page using {@link goToVehicles}.
   * Upon successful retrieval of vehicle data, it sets the browser tab title to the vehicle's make and initiates the
   * fetching of measurements related to the vehicle.
   */
  private fetchData() {
    this.vehicle = this.route.snapshot.data['vehicleData'];

    // Fallback mechanism
    if (!this.vehicle) {
      this.goToVehicles();
      return;
    }

    // Sets tab title with vehicle's make value
    this.titleService.setTitle(this.vehicle?.make + ' | Measurements');

    // Fetching vehicle measurements
    this.measurements$ = this.measurementService.getMeasurementsByVehicleId(
      this.vehicle.id,
    );
  }

  private goToVehicles() {
    this.router.navigate(['/vehicles']).catch(handleError);
  }
}

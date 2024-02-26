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

  private fetchData() {
    this.vehicle = this.route.snapshot.data['vehicleData'];

    if (!this.vehicle) {
      this.goToVehicles();
      return;
    }

    this.titleService.setTitle(this.vehicle?.make + ' | Measurements');
    this.measurements$ = this.measurementService.getMeasurementsByVehicleId(
      this.vehicle.id,
    );
  }

  private goToVehicles() {
    this.router
      .navigate(['/vehicles'])
      .catch((error) => console.error('Error during navigation:', error));
  }
}

import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { Vehicle } from '../../interfaces/vehicle';
import { catchError, EMPTY, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { handleError } from '../../utils/errorHandler';

@Component({
  selector: 'app-car-measurement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehicles.component.html',
})
export class VehiclesComponent implements OnInit {
  /**
   * {@link vehicles$} used as an async pipe.
   */
  vehicles$!: Observable<Vehicle[]>;

  constructor(
    private vehicleService: VehicleService,
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title,
  ) {
    // Setting the title of the browser tab
    this.titleService.setTitle('Vehicles');
  }

  ngOnInit(): void {
    this.getVehicles();
  }

  navigateToMeasurements(vehicleId: number) {
    this.router
      .navigate([vehicleId], { relativeTo: this.route })
      .catch(handleError);
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

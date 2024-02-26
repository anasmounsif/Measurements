import { Routes } from '@angular/router';
import { CarMeasurementComponent } from "./car-measurement/car-measurement.component";
import { AboutComponent } from "./about/about.component";

export const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "car-measurements" },
  { path: "car-measurements", component: CarMeasurementComponent },
  { path: "about", component: AboutComponent }
];

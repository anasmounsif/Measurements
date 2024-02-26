import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarMeasurementComponent } from './car-measurement.component';

describe('CarMeasurementComponent', () => {
  let component: CarMeasurementComponent;
  let fixture: ComponentFixture<CarMeasurementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarMeasurementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarMeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

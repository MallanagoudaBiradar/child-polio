import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyVaccineComponent } from './baby-vaccine.component';

describe('BabyVaccineComponent', () => {
  let component: BabyVaccineComponent;
  let fixture: ComponentFixture<BabyVaccineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabyVaccineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BabyVaccineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

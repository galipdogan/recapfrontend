import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardetaildtoComponent } from './cardetaildto.component';

describe('CardetaildtoComponent', () => {
  let component: CardetaildtoComponent;
  let fixture: ComponentFixture<CardetaildtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardetaildtoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardetaildtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

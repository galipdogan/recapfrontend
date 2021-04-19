import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentaldetaildtoComponent } from './rentaldetaildto.component';

describe('RentaldetaildtoComponent', () => {
  let component: RentaldetaildtoComponent;
  let fixture: ComponentFixture<RentaldetaildtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentaldetaildtoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentaldetaildtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { RentaldetaildtoService } from './rentaldetaildto.service';

describe('RentaldetaildtoService', () => {
  let service: RentaldetaildtoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentaldetaildtoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { DonatorService } from './donator.service';

describe('DonatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DonatorService]
    });
  });

  it('should be created', inject([DonatorService], (service: DonatorService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { HiServiceService } from './hi-service.service';

describe('HiServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HiServiceService]
    });
  });

  it('should be created', inject([HiServiceService], (service: HiServiceService) => {
    expect(service).toBeTruthy();
  }));
});

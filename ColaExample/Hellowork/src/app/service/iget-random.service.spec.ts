import { TestBed, inject } from '@angular/core/testing';

import { IGetRandomService } from './iget-random.service';

describe('IGetRandomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IGetRandomService]
    });
  });

  it('should be created', inject([IGetRandomService], (service: IGetRandomService) => {
    expect(service).toBeTruthy();
  }));
});

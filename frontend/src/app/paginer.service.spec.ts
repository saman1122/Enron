import { TestBed, inject } from '@angular/core/testing';

import { PaginerService } from './paginer.service';

describe('PaginerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaginerService]
    });
  });

  it('should be created', inject([PaginerService], (service: PaginerService) => {
    expect(service).toBeTruthy();
  }));
});

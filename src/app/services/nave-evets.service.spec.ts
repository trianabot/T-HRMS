import { TestBed } from '@angular/core/testing';

import { NaveEvetsService } from './nave-evets.service';

describe('NaveEvetsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NaveEvetsService = TestBed.get(NaveEvetsService);
    expect(service).toBeTruthy();
  });
});

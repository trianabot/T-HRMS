import { TestBed } from '@angular/core/testing';

import { IntersepterService } from './intersepter.service';

describe('IntersepterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IntersepterService = TestBed.get(IntersepterService);
    expect(service).toBeTruthy();
  });
});

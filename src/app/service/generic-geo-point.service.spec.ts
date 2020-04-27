import { TestBed } from '@angular/core/testing';

import { GenericGeoPointService } from './generic-geo-point.service';

describe('GenericGeoPointService', () => {
  let service: GenericGeoPointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericGeoPointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { GoordersService } from './goorders.service';

describe('GoordersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoordersService = TestBed.get(GoordersService);
    expect(service).toBeTruthy();
  });
});

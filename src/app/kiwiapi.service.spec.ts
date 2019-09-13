import { TestBed } from '@angular/core/testing';

import { KiwiapiService } from './kiwiapi.service';

describe('KiwiapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KiwiapiService = TestBed.get(KiwiapiService);
    expect(service).toBeTruthy();
  });
});

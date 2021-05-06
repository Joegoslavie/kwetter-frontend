import { TestBed } from '@angular/core/testing';

import { JwtGuardService } from './jwt-guard.service';

describe('JwtGuardService', () => {
  let service: JwtGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

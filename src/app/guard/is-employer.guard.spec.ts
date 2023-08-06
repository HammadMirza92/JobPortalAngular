import { TestBed } from '@angular/core/testing';

import { IsEmployerGuard } from './is-employer.guard';

describe('IsEmployerGuard', () => {
  let guard: IsEmployerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsEmployerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

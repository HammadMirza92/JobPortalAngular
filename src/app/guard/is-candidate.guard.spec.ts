import { TestBed } from '@angular/core/testing';

import { IsCandidateGuard } from './is-candidate.guard';

describe('IsCandidateGuard', () => {
  let guard: IsCandidateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsCandidateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { IdIsValidIdGuard } from './id-is-valid-id.guard';

describe('IdIsValidIdGuard', () => {
  let guard: IdIsValidIdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IdIsValidIdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

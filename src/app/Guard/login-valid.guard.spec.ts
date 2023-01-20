import { TestBed } from '@angular/core/testing';

import { LoginValidGuard } from './login-valid.guard';

describe('LoginValidGuard', () => {
  let guard: LoginValidGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginValidGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

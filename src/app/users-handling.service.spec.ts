import { TestBed } from '@angular/core/testing';

import { UsersHandlingService } from './users-handling.service';

describe('UsersHandlingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersHandlingService = TestBed.get(UsersHandlingService);
    expect(service).toBeTruthy();
  });
});

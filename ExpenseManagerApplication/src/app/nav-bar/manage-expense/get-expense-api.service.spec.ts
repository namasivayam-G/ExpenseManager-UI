import { TestBed } from '@angular/core/testing';

import { GetExpenseApiService } from './get-expense-api.service';

describe('GetExpenseApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetExpenseApiService = TestBed.get(GetExpenseApiService);
    expect(service).toBeTruthy();
  });
});

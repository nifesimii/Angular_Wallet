import { TestBed } from '@angular/core/testing';

import { SavingsRestapiService } from './savings-restapi.service';

describe('SavingsRestapiService', () => {
  let service: SavingsRestapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavingsRestapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

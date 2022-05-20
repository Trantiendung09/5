import { TestBed } from '@angular/core/testing';

import { MussicService } from './mussic.service';

describe('MussicService', () => {
  let service: MussicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MussicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

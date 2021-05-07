import { TestBed } from '@angular/core/testing';

import { HelplinesService } from './helplines.service';

describe('HelplinesService', () => {
  let service: HelplinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelplinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

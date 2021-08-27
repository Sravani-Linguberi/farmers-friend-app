import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { SoilSchemaService } from './soil-schema.service';

describe('SoilSchemaService', () => {
  let service: SoilSchemaService;
  let httpclient:HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoilSchemaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

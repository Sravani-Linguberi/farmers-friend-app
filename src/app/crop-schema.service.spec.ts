import { TestBed } from '@angular/core/testing';

import { CropSchemaService } from './crop-schema.service';

describe('CropSchemaService', () => {
  let service: CropSchemaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CropSchemaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

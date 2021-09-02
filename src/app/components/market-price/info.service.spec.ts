import { TestBed,inject } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
import { InfoService } from './info.service';

describe('InfoService', () => {
  let service: InfoService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [InfoService]
    });
    service = TestBed.inject(InfoService);
  });
  it('should be initialized', inject([InfoService], (Service: InfoService) => {
    expect(Service).toBeTruthy();
  }));
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});

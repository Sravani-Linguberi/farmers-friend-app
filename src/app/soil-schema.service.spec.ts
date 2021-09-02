import { HttpClient } from '@angular/common/http';
import { TestBed,inject } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
import { SoilSchemaService } from './soil-schema.service';

describe('SoilSchemaService', () => {
  let service: SoilSchemaService;
  let httpclient:HttpClient;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SoilSchemaService]
    });
    service = TestBed.inject(SoilSchemaService);
  });
  it('should be initialized', inject([SoilSchemaService], (Service: SoilSchemaService) => {
    expect(Service).toBeTruthy();
  }));
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  const dummyUserListResponse = {
    data: [
      {"_id":"609367301d62160738e44a0b","title":"Kisan Call Centre","details":"18001801551"}
    ],
  };

  it('getUserList() should return data', () => {
    service.getsoilSchema().subscribe((res) => {
      expect(res).toEqual(dummyUserListResponse);
    });

    const req = httpMock.expectOne('https://reqres.in/api/users');
    expect(req.request.method).toBe('GET');
    req.flush(dummyUserListResponse);
  });
});

import { HttpClient } from '@angular/common/http';
import { TestBed,inject } from '@angular/core/testing';
import { HttpClientTestingModule ,HttpTestingController} from '@angular/common/http/testing';
import { SchemesService } from './schemes.service';

describe('SchemesService', () => {
  let service: SchemesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SchemesService]
    });
    service = TestBed.inject(SchemesService);
  });
  it('should be initialized', inject([SchemesService], (Service: SchemesService) => {
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
    service. getschemesSchema().subscribe((res) => {
      expect(res).toEqual(dummyUserListResponse);
    });

    const req = httpMock.expectOne('http://localhost:3000/api/schemeSchema');
    expect(req.request.method).toBe('GET');
    req.flush(dummyUserListResponse);
  });
});

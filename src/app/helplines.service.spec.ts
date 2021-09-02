import { TestBed,inject } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController  } from '@angular/common/http/testing';
import { HelplinesService } from './helplines.service';

describe('HelplinesService', () => {
  let service: HelplinesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HelplinesService]
    });
    service = TestBed.inject(HelplinesService);
  });
  it('should be initialized', inject([HelplinesService], (authService: HelplinesService) => {
    expect(authService).toBeTruthy();
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
    service. gethelplineSchema().subscribe((res) => {
      expect(res).toEqual(dummyUserListResponse);
    });

    const req = httpMock.expectOne('https://reqres.in/api/users');
    expect(req.request.method).toBe('GET');
    req.flush(dummyUserListResponse);
  });

});

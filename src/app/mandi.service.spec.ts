import { MandiService } from 'src/app/mandi.service';
import { TestBed,inject  } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';


describe('MandiService', () => {
  let service: MandiService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MandiService]
    });
    service = TestBed.inject(MandiService);
  });
  it('should be initialized', inject([MandiService], (mandiService: MandiService) => {
    expect(mandiService).toBeTruthy();
  }));
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  const dummyUserListResponse = {
    data: [
      // {"_id":"609367301d62160738e44a0b","title":"Kisan Call Centre","details":"18001801551"}
      {"_id":"6094f4819920fd53e07cea42","STATE":"ANDHRA PRADESH ","DIST":"BISHENPUR    ","MARKET":"Inderavally ","STATE OF REGULATION":"RPM ","GODOWN":"MCG ","COLDSTORAGE":"NIL ","RAILWAY":"Adilabad ","DISTANCE":"40","CROPS":"Cotton, Pulses ","PHONE":"08731-77425 ","COMMERCIAL FACILITY":"NIL ","ADDRESS":"The Secretary Agril. Market Committee, Inderavally. "}
    ],
  };

  it('getUserList() should return data', () => {
    service. getmandiSchema().subscribe((res) => {
      expect(res).toEqual(dummyUserListResponse);
    });

    const req = httpMock.expectOne('http://localhost:3000/api/mandischema');
    expect(req.request.method).toBe('GET');
    req.flush(dummyUserListResponse);
  });

});

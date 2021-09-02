import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import { of } from 'rxjs';
import { FooterComponent } from './../footer/footer.component';

import { MandiService } from 'src/app/mandi.service';
import { HeaderComponent } from '../header/header.component';
import { MandiComponent } from './mandi.component';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  PaginatePipe,
  PaginationControlsComponent,
  PaginationControlsDirective,
  PaginationService,
} from 'ngx-pagination';

//creating the suite-subscribe()
describe('The test for app component', () => {
  beforeAll(() => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );
  });
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpClientTestingModule],
      declarations: [
        MandiComponent,
        HeaderComponent,
        FooterComponent,
        PaginationControlsComponent,

        PaginatePipe,
        PaginationControlsDirective,
      ],
      providers: [MandiService, PaginationService],
    }).compileComponents();
  });
  let fixture: ComponentFixture<MandiComponent>;
  let cmp: MandiComponent;
  let mandiservice: MandiService;
  beforeEach(() => {
    fixture = TestBed.createComponent(MandiComponent);
    cmp = fixture.componentInstance;
    mandiservice = TestBed.get(MandiService);
    fixture.detectChanges();
  });

  //write the test -it()

  it('should create component', () => {
    expect(cmp).toBeTruthy();
  });
  it('should have title', () => {
    expect(cmp.title).toEqual('MANDI');
  });
  it('should have page', () => {
    expect(cmp.page).toBe(1);
  });
  it("should call getData and return list of mandi", (() => {
    const response = [{"state":"Andhra Pradesh","district":"Chittor","market":"Kalikiri","commodity":"Tomato","variety":"Local","arrival_date":"11/05/2021","min_price":"430","max_price":"640"}];

    spyOn(  mandiservice, 'getmandiSchema').and.returnValue(of(response))

  cmp.getDataFromAPI()

    fixture.detectChanges();

    expect(cmp.getDataFromAPI).toEqual(response);
  }));
});

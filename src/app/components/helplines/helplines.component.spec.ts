import { FooterComponent } from './../footer/footer.component';
import { HeaderComponent } from './../header/header.component';
import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

import { HelplinesService } from './../../helplines.service';
import { HelplinesComponent } from './helplines.component';
import { async, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import * as Rx from 'rxjs';
import { delay } from 'rxjs/operators';
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
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [
        HelplinesComponent,
        HeaderComponent,
        FooterComponent,
        PaginationControlsComponent,
        PaginatePipe,
        PaginationControlsDirective,
      ],
      providers: [HelplinesService, PaginationService],
    }).compileComponents();
  });
  let fixture: ComponentFixture<HelplinesComponent>;
  let cmp: HelplinesComponent;
  let helplineservice: HelplinesService;
  beforeEach(() => {
    fixture = TestBed.createComponent(HelplinesComponent);
    cmp = fixture.componentInstance;
    helplineservice = TestBed.get(HelplinesService);
    fixture.detectChanges();
  });

  //write the test -it()

  it('should create component', () => {
    expect(cmp).toBeTruthy();
  });

  it('should be truthy', () => {
    //Assertions/Expectations
    expect(true).toBeTruthy();
  });
  it('to be equal to 1', () => {
    const num = 1;
    expect(num).toEqual(1);
  });
  it('title should be ', () => {
    expect(cmp.title).toEqual('HELPLINE NUMBERS');
  });
  it('page number is equal to 1 ', () => {
    expect(cmp.page).toEqual(1);
  });
  it("should call getData and return list of market", (() => {
    const response = [{"state":"Andhra Pradesh","district":"Chittor","market":"Kalikiri","commodity":"Tomato","variety":"Local","arrival_date":"11/05/2021","min_price":"430","max_price":"640"}];

    spyOn( helplineservice , 'gethelplineSchema').and.returnValue(of(response))

  cmp.getDataFromAPI()

    fixture.detectChanges();

    expect(cmp.getDataFromAPI).toEqual(response);
  }));
});

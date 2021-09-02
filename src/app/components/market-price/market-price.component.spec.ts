import { FooterComponent } from './../footer/footer.component';
import { HeaderComponent } from './../header/header.component';
import 'zone.js/dist/zone-testing';
import { of } from 'rxjs';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketPriceComponent } from './market-price.component';
import {
  PaginatePipe,
  PaginationControlsComponent,
  PaginationControlsDirective,
  PaginationService,
} from 'ngx-pagination';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { InfoService } from './info.service';

describe('MarketPriceComponent', () => {
  beforeAll(() => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );
  });

  let component: MarketPriceComponent;
  let fixture: ComponentFixture<MarketPriceComponent>;
  let infoservice : InfoService;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ MarketPriceComponent,HeaderComponent,FooterComponent, PaginationControlsComponent,
        PaginatePipe,
        PaginationControlsDirective ],
        providers: [InfoService, PaginationService],

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketPriceComponent);
    component = fixture.componentInstance;
    infoservice = TestBed.get(InfoService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have title', () => {
    expect(component.title).toEqual('MARKET-INFORMATION');
  });
  // it('should called the API method', () => {
  //   const mockData = {"state":"Andhra Pradesh","district":"Chittor","market":"Kalikiri","commodity":"Tomato","variety":"Local","arrival_date":"11/05/2021","min_price":"430","max_price":"640"}
  //   spyOn(component,'getDataFromAPI').and.returnValue(mockData)
  //   //expect(component.title).toEqual('MARKET-INFORMATION');
  // });

  it("should call getData and return list of market", (() => {
    const response = [{"state":"Andhra Pradesh","district":"Chittor","market":"Kalikiri","commodity":"Tomato","variety":"Local","arrival_date":"11/05/2021","min_price":"430","max_price":"640"}];

    spyOn( infoservice , 'getData').and.returnValue(of(response))

  component.getData();

    fixture.detectChanges();

    expect(component.getDataFromAPI).toEqual(response);
  }));
});

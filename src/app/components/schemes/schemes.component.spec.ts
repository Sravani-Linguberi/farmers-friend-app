import { SchemesService } from './../../schemes.service';
import { SoilSchemaService } from './../../soil-schema.service';
import { FooterComponent } from './../footer/footer.component';
import { HeaderComponent } from './../header/header.component';
import 'zone.js/dist/zone-testing';
import { of } from 'rxjs';

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemesComponent } from './schemes.component';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import {
  PaginatePipe,
  PaginationControlsComponent,
  PaginationControlsDirective,
  PaginationService,
} from 'ngx-pagination';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SchemesComponent', () => {
  beforeAll(() => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );
  });
  let component: SchemesComponent;
  let fixture: ComponentFixture<SchemesComponent>;
  let soilservice:SoilSchemaService
  let  schemeservice:SchemesService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ SchemesComponent,HeaderComponent,FooterComponent , PaginationControlsComponent,
        PaginatePipe,
        PaginationControlsDirective,],
      providers: [SoilSchemaService, PaginationService],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemesComponent);
    component = fixture.componentInstance;
    soilservice=TestBed.get(SoilSchemaService)
    schemeservice=TestBed.get(SchemesService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have title',()=>{
    expect(component.title).toBe("GOVERNMENT SCHEMES FOR AGRICULTURE")
  })
  it("should call getData and return list of mandi", (() => {
    const response = [{"state":"Andhra Pradesh","district":"Chittor","market":"Kalikiri","commodity":"Tomato","variety":"Local","arrival_date":"11/05/2021","min_price":"430","max_price":"640"}];

    spyOn( schemeservice, 'getschemesSchema').and.returnValue(of(response))

  component.getDataFromAPI()

    fixture.detectChanges();

    expect(component.getDataFromAPI).toEqual(response);
  }));
});

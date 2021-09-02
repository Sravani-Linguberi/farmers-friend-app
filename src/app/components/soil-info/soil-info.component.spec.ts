import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import {of} from 'rxjs'
import { SoilSchemaService } from './../../soil-schema.service';
import { FooterComponent } from './../footer/footer.component';
import { HeaderComponent } from './../header/header.component';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoilInfoComponent } from './soil-info.component';
import {
  PaginatePipe,
  PaginationControlsComponent,
  PaginationControlsDirective,
  PaginationService,
} from 'ngx-pagination';

describe('SoilInfoComponent', () => {
  let component: SoilInfoComponent;
  let fixture: ComponentFixture<SoilInfoComponent>;
  let soilservice: SoilSchemaService;
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
      declarations: [SoilInfoComponent, HeaderComponent, FooterComponent,
      PaginationControlsComponent,  PaginatePipe,
      PaginationControlsDirective],
      providers: [SoilSchemaService,PaginationService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoilInfoComponent);
     soilservice = TestBed.get(SoilSchemaService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have title', () => {
    expect(component.title).toBeTruthy('Market-Price-Info');
  });
  it("should call getData and return list of market", (() => {
    const response = [{"state":"Andhra Pradesh","district":"Chittor","market":"Kalikiri","commodity":"Tomato","variety":"Local","arrival_date":"11/05/2021","min_price":"430","max_price":"640"}];

    spyOn( soilservice , 'getsoilSchema').and.returnValue(of(response))

  component.getDataFromAPI()

    fixture.detectChanges();

    expect(component.getDataFromAPI).toEqual(response);
  }));
});

// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { SoilInfoComponent } from './soil-info.component';

// //creating the suite-subscribe()
// describe("The test for app component",()=>{
//   let soilservice:SoilSchemaService
//   beforeEach(async()=>{
//    await TestBed.configureTestingModule({
//       declarations:[SoilInfoComponent],
//       providers:[SoilSchemaService]
//     }).compileComponents()
//   })
//   let fixture:ComponentFixture<SoilInfoComponent>
//   let cmp:SoilInfoComponent
//   beforeEach(()=>{
//      fixture=TestBed.createComponent(SoilInfoComponent)
//      let soilservice=TestBed.get(SoilSchemaService)
//     cmp=fixture.componentInstance
//     fixture.detectChanges()
//   })

//   //write the test -it()
//   // it("should contain hello richa",()=>{
//   //   const compiled=fixture.debugElement.nativeElement;
//   //   console.log("COMPILED",compiled.querySelector("h3").textContent);
//   //   expect(compiled.querySelector("h3").textContent).toContain("Market-Price-Info");
//   // })
//   it("should create component",()=>{
//     expect(cmp).toBeTruthy()
//   })
//   it("should have title",()=>{
//     // let title="Market-Price-Info"
//     expect(cmp.title).toBeUndefined(true);
//   })

// })

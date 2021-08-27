// import { FooterComponent } from './../footer/footer.component';
// import { HeaderComponent } from './../header/header.component';
// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { SoilInfoComponent } from './soil-info.component';

// describe('SoilInfoComponent', () => {
//   let component: SoilInfoComponent;
//   let fixture: ComponentFixture<SoilInfoComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ SoilInfoComponent,HeaderComponent,FooterComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(SoilInfoComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
//   it('should have title', () => {
//     expect(component.title).toBeTruthy("Market-Price-Info");
//   });
//   it('should have page', () => {
//     expect(component.page).toBeTruthy(1);
//   });
//   it('should have config', () => {
//     expect(component.config).toBeTruthy(true);
//   });
// });




import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoilInfoComponent } from './soil-info.component';
//creating the suite-subscribe()
describe("The test for app component",()=>{
  beforeEach(async()=>{
   await TestBed.configureTestingModule({
      declarations:[SoilInfoComponent],
      providers:[]
    }).compileComponents()
  })
  let fixture:ComponentFixture<SoilInfoComponent>
  let cmp:SoilInfoComponent
  beforeEach(()=>{
     fixture=TestBed.createComponent(SoilInfoComponent)
    cmp=fixture.componentInstance
    fixture.detectChanges()
  })

  //write the test -it()
  // it("should contain hello richa",()=>{
  //   const compiled=fixture.debugElement.nativeElement;
  //   console.log("COMPILED",compiled.querySelector("h3").textContent);
  //   expect(compiled.querySelector("h3").textContent).toContain("Market-Price-Info");
  // })
  it("should create component",()=>{
    expect(cmp).toBeTruthy()
  })
  it("should have title",()=>{
    expect(cmp.title).toBe("Market-Price-Info");
  })
  it("should be truthy",()=>{
    //Assertions/Expectations
    expect(true).toBeTruthy();
  })
  it("to be equal to 1",()=>{
  expect(cmp.page).toEqual(1);
  })
  // it("config not to be null",()=>{
  //   expect(cmp.config).not.toBe(null);
  //   })



})

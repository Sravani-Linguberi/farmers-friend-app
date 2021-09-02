import { SoilSchemaService } from './../../soil-schema.service';
// import { MandiComponent } from './../mandi/mandi.component';
// import { SoilInfoComponent } from './../soil-info/soil-info.component';
// import { FooterComponent } from './../footer/footer.component';
// import { HeaderComponent } from './../header/header.component';
// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { AddressComponent } from './address.component';

// describe('AddressComponent', () => {
//   let component: AddressComponent;
//   let fixture: ComponentFixture<AddressComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ AddressComponent,HeaderComponent,FooterComponent,SoilInfoComponent,MandiComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(AddressComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });


//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });


//   it('soil should be true', () => {
//     expect(component.soil).toBeTruthy();

//   });
//   it('mandi should be false', () => {
//     expect(component.mandi).toBe(false);

//   });
//   it('it should check the function', () => {
//     expect(component.showSoil()).toBeTruthy();

//   });


// });



import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddressComponent } from './address.component';

//creating the suite-subscribe()
describe("The test for app component",()=>{
  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations:[AddressComponent],
      providers:[]
    }).compileComponents()
  })
  let fixture:ComponentFixture<AddressComponent>
  let cmp:AddressComponent
  beforeEach(()=>{
     fixture=TestBed.createComponent(AddressComponent)
    cmp=fixture.componentInstance
    fixture.detectChanges()
  })

  //write the test -it()

  it("to test the showsoil function",()=>{
    let mandi=new AddressComponent();
    let fun=mandi.showSoil();
    expect(fun).toBeTruthy()
  })
  it("to test the showsoil function",()=>{

    expect(cmp.mandi).toBe(false)
  })
  it("to test the showsoil function",()=>{

    expect(cmp.soil).toBe(true)
  })

  it("to test the showMandi function",()=>{
    let mandi1=new AddressComponent();
    let fun1=mandi1.showMandi();
    expect(fun1).toBeTruthy()
  })
})

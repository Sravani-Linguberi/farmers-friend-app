import { FooterComponent } from './../footer/footer.component';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MandiService } from 'src/app/mandi.service';
import { HeaderComponent } from '../header/header.component';
import { MandiComponent } from './mandi.component';
import { PaginationControlsComponent } from 'ngx-pagination';
//creating the suite-subscribe()
describe("The test for app component",()=>{
  beforeEach(async()=>{
   await TestBed.configureTestingModule({
      declarations:[MandiComponent,HeaderComponent,FooterComponent,PaginationControlsComponent],
      providers:[]
    }).compileComponents()
  })
  let fixture:ComponentFixture<MandiComponent>
  let cmp:MandiComponent
  beforeEach(()=>{
     fixture=TestBed.createComponent(MandiComponent)
    cmp=fixture.componentInstance
    fixture.detectChanges()
  })

  //write the test -it()
  it("should contain hello Currently Avaliable Mandi's",()=>{
    const compiled=fixture.debugElement.nativeElement;
    console.log("COMPILED",compiled.querySelector("h1").textContent);
    expect(compiled.querySelector("h1").textContent).toContain("Currently Avaliable Mandi's");
  })
  it("should create component",()=>{
    expect(cmp).toBeTruthy()
  })
  it("should have title",()=>{
    expect(cmp. title).toBe("MANDI");
  })
  it("should have page",()=>{
    expect(cmp.page).toBe(1);
  })



})

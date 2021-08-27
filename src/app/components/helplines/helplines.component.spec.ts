import { FooterComponent } from './../footer/footer.component';
import { HeaderComponent } from './../header/header.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelplinesComponent } from './helplines.component';
import { PaginationControlsComponent } from 'ngx-pagination';

describe('HelplinesComponent', () => {
  let component: HelplinesComponent;
  let fixture: ComponentFixture<HelplinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelplinesComponent ,HeaderComponent,FooterComponent,PaginationControlsComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelplinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should contain hello Wanna help...Please Call Us 😊😊",()=>{
    const compiled=fixture.debugElement.nativeElement;
    console.log("COMPILED",compiled.querySelector("h1").textContent);
    expect(compiled.querySelector("h1").textContent).toContain("Wanna help...Please Call Us 😊😊");
  })
});

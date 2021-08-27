import { FooterComponent } from './../footer/footer.component';
import { HeaderComponent } from './../header/header.component';

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemesComponent } from './schemes.component';

describe('SchemesComponent', () => {
  let component: SchemesComponent;
  let fixture: ComponentFixture<SchemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemesComponent,HeaderComponent,FooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have title',()=>{
    expect(component.title).toBe("GOVERNMENT SCHEMES FOR AGRICULTURE")
  })
});

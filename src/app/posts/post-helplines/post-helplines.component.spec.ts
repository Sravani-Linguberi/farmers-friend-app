import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostHelplinesComponent } from './post-helplines.component';

describe('PostHelplinesComponent', () => {
  let component: PostHelplinesComponent;
  let fixture: ComponentFixture<PostHelplinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostHelplinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostHelplinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

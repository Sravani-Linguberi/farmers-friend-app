import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostMandiComponent } from './post-mandi.component';

describe('PostMandiComponent', () => {
  let component: PostMandiComponent;
  let fixture: ComponentFixture<PostMandiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostMandiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostMandiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

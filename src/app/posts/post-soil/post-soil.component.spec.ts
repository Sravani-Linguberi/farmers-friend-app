import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSoilComponent } from './post-soil.component';

describe('PostSoilComponent', () => {
  let component: PostSoilComponent;
  let fixture: ComponentFixture<PostSoilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostSoilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostSoilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

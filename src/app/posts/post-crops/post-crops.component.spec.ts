import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCropsComponent } from './post-crops.component';

describe('PostCropsComponent', () => {
  let component: PostCropsComponent;
  let fixture: ComponentFixture<PostCropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCropsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

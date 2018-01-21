import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsByTagComponent } from './posts-by-tag.component';

describe('PostsByTagComponent', () => {
  let component: PostsByTagComponent;
  let fixture: ComponentFixture<PostsByTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsByTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsByTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

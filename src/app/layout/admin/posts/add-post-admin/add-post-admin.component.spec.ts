import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPostAdminComponent } from './add-post-admin.component';

describe('AddPostAdminComponent', () => {
  let component: AddPostAdminComponent;
  let fixture: ComponentFixture<AddPostAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPostAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPostAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

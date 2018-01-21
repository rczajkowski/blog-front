import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTagAdminComponent } from './add-tag-admin.component';

describe('AddTagAdminComponent', () => {
  let component: AddTagAdminComponent;
  let fixture: ComponentFixture<AddTagAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTagAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTagAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

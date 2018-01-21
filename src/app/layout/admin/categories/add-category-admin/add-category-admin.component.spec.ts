import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoryAdminComponent } from './add-category-admin.component';

describe('AddCategoryAdminComponent', () => {
  let component: AddCategoryAdminComponent;
  let fixture: ComponentFixture<AddCategoryAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCategoryAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCategoryAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatorManagementComponent } from './donator-management.component';

describe('DonatorManagementComponent', () => {
  let component: DonatorManagementComponent;
  let fixture: ComponentFixture<DonatorManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonatorManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonatorManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

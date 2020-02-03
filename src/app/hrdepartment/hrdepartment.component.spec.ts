import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HRDepartmentComponent } from './hrdepartment.component';

describe('HRDepartmentComponent', () => {
  let component: HRDepartmentComponent;
  let fixture: ComponentFixture<HRDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HRDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HRDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

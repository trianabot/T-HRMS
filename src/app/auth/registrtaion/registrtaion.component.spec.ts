import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrtaionComponent } from './registrtaion.component';

describe('RegistrtaionComponent', () => {
  let component: RegistrtaionComponent;
  let fixture: ComponentFixture<RegistrtaionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrtaionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrtaionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

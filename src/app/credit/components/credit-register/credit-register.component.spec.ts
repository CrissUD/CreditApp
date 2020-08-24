import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditRegisterComponent } from './credit-register.component';

describe('CreditRegisterComponent', () => {
  let component: CreditRegisterComponent;
  let fixture: ComponentFixture<CreditRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

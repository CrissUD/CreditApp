import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditClientListComponent } from './credit-client-list.component';

describe('CreditClientListComponent', () => {
  let component: CreditClientListComponent;
  let fixture: ComponentFixture<CreditClientListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditClientListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditClientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

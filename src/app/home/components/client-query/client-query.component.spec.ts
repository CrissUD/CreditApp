import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientQueryComponent } from './client-query.component';

describe('ClientQueryComponent', () => {
  let component: ClientQueryComponent;
  let fixture: ComponentFixture<ClientQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

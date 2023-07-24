import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyInvoiceReminderPageComponent } from './monthly-invoice-reminder-page.component';

describe('MonthlyInvoiceReminderPageComponent', () => {
  let component: MonthlyInvoiceReminderPageComponent;
  let fixture: ComponentFixture<MonthlyInvoiceReminderPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyInvoiceReminderPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyInvoiceReminderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

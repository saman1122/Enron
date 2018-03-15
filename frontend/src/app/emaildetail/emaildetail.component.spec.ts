import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmaildetailComponent } from './emaildetail.component';

describe('EmaildetailComponent', () => {
  let component: EmaildetailComponent;
  let fixture: ComponentFixture<EmaildetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmaildetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmaildetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

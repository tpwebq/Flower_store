import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayWithComponent } from './pay-with.component';

describe('PayWithComponent', () => {
  let component: PayWithComponent;
  let fixture: ComponentFixture<PayWithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayWithComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayWithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

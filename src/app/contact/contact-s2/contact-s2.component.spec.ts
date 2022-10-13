import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactS2Component } from './contact-s2.component';

describe('ContactS2Component', () => {
  let component: ContactS2Component;
  let fixture: ComponentFixture<ContactS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactS2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactS1Component } from './contact-s1.component';

describe('ContactS1Component', () => {
  let component: ContactS1Component;
  let fixture: ComponentFixture<ContactS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactS1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

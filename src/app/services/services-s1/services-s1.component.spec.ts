import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesS1Component } from './services-s1.component';

describe('ServicesS1Component', () => {
  let component: ServicesS1Component;
  let fixture: ComponentFixture<ServicesS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesS1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

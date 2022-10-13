import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesS2Component } from './services-s2.component';

describe('ServicesS2Component', () => {
  let component: ServicesS2Component;
  let fixture: ComponentFixture<ServicesS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesS2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

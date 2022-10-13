import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutS2Component } from './about-s2.component';

describe('AboutS2Component', () => {
  let component: AboutS2Component;
  let fixture: ComponentFixture<AboutS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutS2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

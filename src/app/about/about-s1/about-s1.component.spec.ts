import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutS1Component } from './about-s1.component';

describe('AboutS1Component', () => {
  let component: AboutS1Component;
  let fixture: ComponentFixture<AboutS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutS1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketS1Component } from './basket-s1.component';

describe('BasketS1Component', () => {
  let component: BasketS1Component;
  let fixture: ComponentFixture<BasketS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketS1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasketS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

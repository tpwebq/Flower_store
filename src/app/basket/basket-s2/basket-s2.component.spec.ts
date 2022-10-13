import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketS2Component } from './basket-s2.component';

describe('BasketS2Component', () => {
  let component: BasketS2Component;
  let fixture: ComponentFixture<BasketS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketS2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasketS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

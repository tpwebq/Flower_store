import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexS1Component } from './index-s1.component';

describe('IndexS1Component', () => {
  let component: IndexS1Component;
  let fixture: ComponentFixture<IndexS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexS1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

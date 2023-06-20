import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Training3Component } from './training3.component';

describe('Training3Component', () => {
  let component: Training3Component;
  let fixture: ComponentFixture<Training3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Training3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Training3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

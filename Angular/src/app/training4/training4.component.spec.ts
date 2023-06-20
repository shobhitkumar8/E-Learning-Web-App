import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Training4Component } from './training4.component';

describe('Training4Component', () => {
  let component: Training4Component;
  let fixture: ComponentFixture<Training4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Training4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Training4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

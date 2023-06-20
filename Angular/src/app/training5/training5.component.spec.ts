import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Training5Component } from './training5.component';

describe('Training5Component', () => {
  let component: Training5Component;
  let fixture: ComponentFixture<Training5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Training5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Training5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

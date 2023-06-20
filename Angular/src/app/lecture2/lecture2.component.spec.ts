import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture2Component } from './lecture2.component';

describe('Lecture2Component', () => {
  let component: Lecture2Component;
  let fixture: ComponentFixture<Lecture2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lecture2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lecture2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

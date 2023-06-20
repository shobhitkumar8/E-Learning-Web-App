import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture4Component } from './lecture4.component';

describe('Lecture4Component', () => {
  let component: Lecture4Component;
  let fixture: ComponentFixture<Lecture4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lecture4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lecture4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

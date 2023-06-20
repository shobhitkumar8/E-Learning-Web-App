import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture5Component } from './lecture5.component';

describe('Lecture5Component', () => {
  let component: Lecture5Component;
  let fixture: ComponentFixture<Lecture5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lecture5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lecture5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seletorv2Component } from './seletorv2.component';

describe('Seletorv2Component', () => {
  let component: Seletorv2Component;
  let fixture: ComponentFixture<Seletorv2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Seletorv2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Seletorv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepdendencyInjectionComponent } from './depdendency-injection.component';

describe('DepdendencyInjectionComponent', () => {
  let component: DepdendencyInjectionComponent;
  let fixture: ComponentFixture<DepdendencyInjectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepdendencyInjectionComponent]
    });
    fixture = TestBed.createComponent(DepdendencyInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

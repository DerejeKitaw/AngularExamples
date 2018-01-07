import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppObservableChangeDetectionComponent } from './app-observable-change-detection.component';

describe('AppObservableChangeDetectionComponent', () => {
  let component: AppObservableChangeDetectionComponent;
  let fixture: ComponentFixture<AppObservableChangeDetectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppObservableChangeDetectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppObservableChangeDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

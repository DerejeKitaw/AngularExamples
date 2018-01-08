import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppOnPushChangeDetectionComponent } from './app-on-push-change-detection.component';

describe('AppOnPushChangeDetectionComponent', () => {
  let component: AppOnPushChangeDetectionComponent;
  let fixture: ComponentFixture<AppOnPushChangeDetectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppOnPushChangeDetectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppOnPushChangeDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

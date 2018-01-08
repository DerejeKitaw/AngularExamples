import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDefaultChangeDetectionComponent } from './app-default-change-detection.component';

describe('AppDefaultChangeDetectionComponent', () => {
  let component: AppDefaultChangeDetectionComponent;
  let fixture: ComponentFixture<AppDefaultChangeDetectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDefaultChangeDetectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDefaultChangeDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

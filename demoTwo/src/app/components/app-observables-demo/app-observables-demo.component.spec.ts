import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppObservablesDemoComponent } from './app-observables-demo.component';

describe('AppObservablesDemoComponent', () => {
  let component: AppObservablesDemoComponent;
  let fixture: ComponentFixture<AppObservablesDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppObservablesDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppObservablesDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

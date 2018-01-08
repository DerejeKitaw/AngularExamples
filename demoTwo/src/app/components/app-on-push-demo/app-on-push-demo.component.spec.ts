import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppOnPushDemoComponent } from './app-on-push-demo.component';

describe('AppOnPushDemoComponent', () => {
  let component: AppOnPushDemoComponent;
  let fixture: ComponentFixture<AppOnPushDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppOnPushDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppOnPushDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

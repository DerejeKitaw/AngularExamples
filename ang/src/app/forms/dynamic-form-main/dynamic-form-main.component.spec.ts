import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormMainComponent } from './dynamic-form-main.component';

describe('DynamicFormMainComponent', () => {
  let component: DynamicFormMainComponent;
  let fixture: ComponentFixture<DynamicFormMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

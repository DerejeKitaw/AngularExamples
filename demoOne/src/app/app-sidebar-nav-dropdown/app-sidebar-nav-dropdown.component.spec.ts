import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSidebarNavDropdownComponent } from './app-sidebar-nav-dropdown.component';

describe('AppSidebarNavDropdownComponent', () => {
  let component: AppSidebarNavDropdownComponent;
  let fixture: ComponentFixture<AppSidebarNavDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSidebarNavDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSidebarNavDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

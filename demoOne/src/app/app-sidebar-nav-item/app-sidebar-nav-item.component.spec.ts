import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSidebarNavItemComponent } from './app-sidebar-nav-item.component';

describe('AppSidebarNavItemComponent', () => {
  let component: AppSidebarNavItemComponent;
  let fixture: ComponentFixture<AppSidebarNavItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSidebarNavItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSidebarNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

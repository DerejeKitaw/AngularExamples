import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';
import { AppSidebarNavComponent } from './app-sidebar-nav/app-sidebar-nav.component';
import { AppSidebarNavItemComponent } from './app-sidebar-nav-item/app-sidebar-nav-item.component';
import { AppSidebarNavLinkComponent } from './app-sidebar-nav-link/app-sidebar-nav-link.component';
import { AppSidebarNavDropdownComponent } from './app-sidebar-nav-dropdown/app-sidebar-nav-dropdown.component';
import { AppSidebarNavTitleComponent } from './app-sidebar-nav-title/app-sidebar-nav-title.component';
import { NavDropdownDirective } from './nav-dropdown-directive/nav-dropdown.directive';
import { NavDropdownToggleDirective } from './nav-dropdown-directive/nav-dropdown-toggle.directive';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppSidebarComponent,
    AppSidebarNavComponent,
    AppSidebarNavItemComponent,
    AppSidebarNavLinkComponent,
    AppSidebarNavDropdownComponent,
    AppSidebarNavTitleComponent,
    NavDropdownDirective,
    NavDropdownToggleDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TopContainerComponent } from './top-container/top-container.component';
import { BoxesSectionComponent } from './boxes-section/boxes-section.component';
import { InfoSectionComponent } from './info-section/info-section.component';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';
import { FooterComponent } from './footer/footer.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginFormHeaderComponent } from './login-form/login-form-header/login-form-header.component';
import { LoginFormFooterComponent } from './login-form/login-form-footer/login-form-footer.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TopContainerComponent,
    BoxesSectionComponent,
    InfoSectionComponent,
    PortfolioSectionComponent,
    FooterComponent,
    LoginFormComponent,
    LoginFormHeaderComponent,
    LoginFormFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

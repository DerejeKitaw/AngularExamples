import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';

import { formModule } from './forms/form.module';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  // All component need to be declared to be used in the module
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    //HeroFormComponent,

    
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    //formModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

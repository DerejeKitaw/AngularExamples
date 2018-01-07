import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppObservableChangeDetectionComponent } from './components/app-observable-change-detection/app-observable-change-detection.component';


@NgModule({
  declarations: [
    AppComponent,
    AppObservableChangeDetectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

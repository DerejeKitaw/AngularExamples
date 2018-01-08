import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppObservableChangeDetectionComponent } from './components/app-observable-change-detection/app-observable-change-detection.component';
import { AppObservablesDemoComponent } from './components/app-observables-demo/app-observables-demo.component';
import { AppDefaultChangeDetectionComponent } from './components/app-default-change-detection/app-default-change-detection.component';
import { AppOnPushChangeDetectionComponent } from './components/app-on-push-change-detection/app-on-push-change-detection.component';
import { AppOnPushDemoComponent } from './components/app-on-push-demo/app-on-push-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    AppObservableChangeDetectionComponent,
    AppObservablesDemoComponent,
    AppDefaultChangeDetectionComponent,
    AppOnPushChangeDetectionComponent,
    AppOnPushDemoComponent
  ],
  imports: [
    // CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

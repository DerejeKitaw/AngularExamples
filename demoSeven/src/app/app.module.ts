import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AlertService } from './alert/alert.service';
import { AlertComponent } from './alert/alert.component';
import { Alert1Component } from './alert1/alert1.component';
import {ModalModule, AlertModule, BsDatepickerModule} from 'ngx-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    Alert1Component,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot()
  ],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }

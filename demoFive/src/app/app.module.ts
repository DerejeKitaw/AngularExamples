import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import * as firebase from 'firebase';

const  config = {
  apiKey: 'AIzaSyAp-UR8f_4IXw5Gg7khW15EsHa_vZ5LjUw',
  authDomain: 'demofive-90db8.firebaseapp.com',
  databaseURL: 'https://demofive-90db8.firebaseio.com',
  projectId: 'demofive-90db8',
  storageBungcket: '',
  messagingSenderId: '890343590522'
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

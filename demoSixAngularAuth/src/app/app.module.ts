import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import * as firebase from 'firebase';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { MembersComponent } from './members/members.component';
import { SignupComponent } from './signup/signup.component';

const  config = {
  apiKey: 'AIzaSyAp-UR8f_4IXw5Gg7khW15EsHa_vZ5LjUw',
  authDomain: 'demofive-90db8.firebaseapp.com',
  databaseURL: 'https://demofive-90db8.firebaseio.com',
  projectId: 'demofive-90db8',
  storageBucket: '',
  messagingSenderId: '890343590522'
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    MembersComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

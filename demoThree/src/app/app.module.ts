import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CountyAppModule } from './county-app/county-app.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountyAppModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TopContainerComponent } from './top-container/top-container.component';
import { BoxesSectionComponent } from './boxes-section/boxes-section.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TopContainerComponent,
    BoxesSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountyAppRoutingModule, countiesRoutedComponents } from './county-app-routing.module';

// register store module to angular county module
import { Store, StoreModule } from '@ngrx/store';

// get all reducer properties
import { reducers } from './store';


@NgModule({
  imports: [
    CommonModule,
    CountyAppRoutingModule,
    StoreModule.forFeature('counties', reducers),
  ],
  declarations: [countiesRoutedComponents]
})
export class CountyAppModule { }

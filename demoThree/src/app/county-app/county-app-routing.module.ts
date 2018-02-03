import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountiesComponent } from './counties/counties.component'; // reducers object will be pass to StoreModule.forFeacher


const routes: Routes = [
  {
    path: '',
    component: CountiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountyAppRoutingModule { }

export const countiesRoutedComponents = [CountiesComponent];
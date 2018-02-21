import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InverterListComponent } from './inverter-list/inverter-list.component';

const routes: Routes = [
  { path: 'inverters', component: InverterListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvertersRoutingModule { }

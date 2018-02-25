import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';

const routes: Routes = [
  { path: 'employee', component: EmployeeEditComponent},
  {
    path: 'list',
    component: EmployeeListComponent,
    outlet: 'popup'
  },
  { path: '', redirectTo: 'employee', pathMatch: 'full'},
  { path: '**', redirectTo: 'employee', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

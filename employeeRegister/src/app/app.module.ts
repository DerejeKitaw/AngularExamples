//#region imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

// firebase import
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';

import { EmployeeService } from './employee/shared/employee.service';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
// Third pary
import {ToastrModule} from 'ngx-toastr';

//#endregion imports
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeEditComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [AngularFireDatabase, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

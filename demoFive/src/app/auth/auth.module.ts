import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoverComponent } from './recover/recover.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    AuthRoutingModule,
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    RecoverComponent
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    RecoverComponent
  ]
})
export class AuthModule { }

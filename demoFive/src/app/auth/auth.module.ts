import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoverComponent } from './recover/recover.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AuthRoutingModule } from './auth-routing.module';
import {MatInputModule, MatCardModule, MatButtonModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    AuthRoutingModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
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
  ],
  providers: [AuthService],
})
export class AuthModule { }

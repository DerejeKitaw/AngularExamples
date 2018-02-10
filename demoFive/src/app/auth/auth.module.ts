import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoverComponent } from './recover/recover.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AuthRoutingModule } from './auth-routing.module';
import {MatInputModule, MatCardModule, MatButtonModule, MatListModule} from '@angular/material';
import { AuthService } from './auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    AuthRoutingModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    RecoverComponent,
    UsersListComponent
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    RecoverComponent
  ],
  providers: [AuthService],
})
export class AuthModule { }

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { ValidationFormComponent } from './validation-form/validation-form.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
        { path: 'heroForm', component: HeroFormComponent },
        { path: 'validationForm', component: ValidationFormComponent },
        
        
    ]),
    HttpClientModule, //add this module for angular4
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    HeroFormComponent,
    ValidationFormComponent,
  ],
  providers: [
   

  ]
})
export class formModule { }

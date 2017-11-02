import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { ValidationFormComponent } from './validation-form/validation-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { DynamicFormMainComponent } from './dynamic-form-main/dynamic-form-main.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { QuestionService } from './question.service';
import { QuestionControlService } from './question-control.service';



@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule,FormsModule,
    RouterModule.forChild([
        { path: 'heroForm', component: HeroFormComponent },
        { path: 'validationForm', component: ValidationFormComponent },
        { path: 'DynamicFormMain', component: DynamicFormMainComponent },
        
        
    ]),
    HttpClientModule, //add this module for angular4

    ReactiveFormsModule
  ],
  declarations: [
    HeroFormComponent,
    ValidationFormComponent,
    DynamicFormQuestionComponent,
    DynamicFormMainComponent,
    DynamicFormComponent,
  ],
  providers: [
    QuestionService,
    QuestionControlService

  ]
})
export class formModule { }

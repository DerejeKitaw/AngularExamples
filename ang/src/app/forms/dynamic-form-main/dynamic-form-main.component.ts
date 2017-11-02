import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';

@Component({
  selector: 'dynamic-form-main',
  templateUrl: './dynamic-form-main.component.html',
  styleUrls: ['./dynamic-form-main.component.css']
})
export class DynamicFormMainComponent  {
  questions: any[];
  
    constructor(service: QuestionService) {
      this.questions = service.getQuestions();
    }
  }
  
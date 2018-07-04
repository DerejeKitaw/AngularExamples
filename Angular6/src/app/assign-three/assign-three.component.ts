import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign-three',
  templateUrl: './assign-three.component.html',
  styleUrls: ['./assign-three.component.css']
})
export class AssignThreeComponent implements OnInit {
  disParagraph = false;
  log = [];
  constructor() { }

  ngOnInit() {
  }
  displayParagraph() {
this.disParagraph =  true;
this.log.push(Date());
  }
}

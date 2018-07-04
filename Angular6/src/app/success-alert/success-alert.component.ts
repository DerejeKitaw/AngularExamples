import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {
  adduserName = false;
  userName = '';
  constructor() {}

  ngOnInit() {}
  getUserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
    if (this.userName !== '') {
      this.adduserName = true;
    } else {
      this.adduserName = false;
    }
  }
  resetUserName() {
    this.userName = '';
  }
}

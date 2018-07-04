import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {
  username = '';
  username1 = '';
  constructor() { }

  ngOnInit() {
  }
  rturnUserName(event: Event) {
    this.username1 = (<HTMLInputElement>event.target).value;
  }
}

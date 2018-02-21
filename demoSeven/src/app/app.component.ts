import { Component, OnInit } from '@angular/core';
import { AlertService } from './alert/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private alertServer: AlertService) {
    console.log('getAlert: ' + alertServer.getAlert);
  }
  ngOnInit() {
  }
  message() {
    // this.alertServer.alert('1', 'ww', 'true');
    this.alertServer.error('1', 'ww');

  }
}

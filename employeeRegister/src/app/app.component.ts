import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  onActivate(e) {
    console.log('onActivate' + JSON.stringify(e));
  }
  onDeactivate(e) {
    console.log('onDeactivate' + JSON.stringify(e));
  }
}


import { Profile } from '../profile.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-push-demo',
  templateUrl: './app-on-push-demo.component.html',
  styleUrls: ['./app-on-push-demo.component.scss']
})
export class AppOnPushDemoComponent implements OnInit {
  profile1: Profile = new Profile('Felipe', 'Coury');
  profile2: Profile = new Profile('Nate', 'Murray');
  constructor() { }

  ngOnInit() {
  }

}

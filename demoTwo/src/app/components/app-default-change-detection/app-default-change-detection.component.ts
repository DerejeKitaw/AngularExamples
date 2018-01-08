import { Profile } from '../profile.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-change-detection',
  templateUrl: './app-default-change-detection.component.html',
  styleUrls: ['./app-default-change-detection.component.scss']
})
export class AppDefaultChangeDetectionComponent implements OnInit {
  @Input() profile: Profile;
  constructor() { }

  ngOnInit() {
  }

}

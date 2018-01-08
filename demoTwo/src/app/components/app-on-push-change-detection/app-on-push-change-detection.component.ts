import { Profile } from '../profile.model';
import { Component, Input, OnInit , ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-on-push-change-detection',
  templateUrl: './app-on-push-change-detection.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app-on-push-change-detection.component.scss']
})
export class AppOnPushChangeDetectionComponent implements OnInit {
  @Input() profile: Profile;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-observable-change-detection',
  templateUrl: './app-observable-change-detection.component.html',
  styleUrls: ['./app-observable-change-detection.component.scss']
})
export class AppObservableChangeDetectionComponent implements OnInit {
  @Input() items: Observable<number>;
  counter = 0;

  constructor(private changeDetector: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.items.subscribe((v) => {
      console.log('got value', v);
      this.counter++;
      // detach will detach the view from updating
      // this.changeDetector.detach();

      // checkNoChanges use for development to check if there is no change coming. If ther e is change it will through error
      // this.changeDetector.checkNoChanges();

      // this.changeDetector.detectChanges();
      // if (this.counter % 5 === 0) {
      //   // this.changeDetector.markForCheck();
      // }
    // },
    //   null,
    //   () => {
    //     this.changeDetector.markForCheck();
      }
    );
  }
}

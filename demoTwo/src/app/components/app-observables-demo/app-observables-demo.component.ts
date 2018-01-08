import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-observables-demo',
  templateUrl: './app-observables-demo.component.html',
  styleUrls: ['./app-observables-demo.component.scss']
})
export class AppObservablesDemoComponent implements OnInit {
  itemObservable: Observable<number>;

  constructor() { }

  ngOnInit() {
    // timer (start after x second, with x interval).take(upto z)
    this.itemObservable = Observable.timer(2000, 1000).take(10);
  }

}

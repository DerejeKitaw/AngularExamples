import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import * as fromStore from '../store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-counties',
  template: `
    <p>
      counties works!
    </p>
  `,
  styleUrls: ['./counties.component.scss']
})
export class CountiesComponent implements OnInit {

  constructor(private router: Router,
    private store: Store<fromStore.CountiesState>) { }

  ngOnInit() {
    console.log('... Initializing counties component');
    this.store.select('Counties').subscribe(state => {  console.log(state); });
    this.store.dispatch(new fromStore.LoadAllCounties());
  }

}

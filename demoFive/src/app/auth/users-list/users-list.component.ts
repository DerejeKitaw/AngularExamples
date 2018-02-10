import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  public accounts;

  constructor() { }
  
  ngOnInit() {
    const ref = firebase.database().ref('/accounts');
    ref.on( 'value', result => this.accounts = this.toArray(result.val()));
  }

// convert object to an array
private toArray(obj): any[] {
  const arr = [];
  Object.keys(obj).forEach(key => {
    arr.push(obj[key]);
  });
  return arr;
}
}

import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class InverterService {
  inverterLists: AngularFireList<any>;
  // selectedEmployee: Inverter = new Inverter();

  constructor(private _firebase: AngularFireDatabase) {}

  getData() {
    this.inverterLists = this._firebase.list('inverters');
    return this.inverterLists;
  }
}

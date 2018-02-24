import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class InverterService {
  inverterLists: AngularFireList<any>;
  // selectedEmployee: Inverter = new Inverter();

  constructor(private _firebaseDb: AngularFireDatabase) {}

  getAllInverter() {
    this.inverterLists = this._firebaseDb.list('inverters');
    return this.inverterLists;
  }

  // TODO: Add new inverter

}

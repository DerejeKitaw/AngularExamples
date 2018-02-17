import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AlertService {
  private subject = new Subject();
  constructor() { }
  getAlert(): Observable<any> {
    return this.subject.asObservable();
  }
}

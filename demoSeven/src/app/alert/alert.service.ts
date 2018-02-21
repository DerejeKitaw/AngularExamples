import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Alert } from './alert';
import { Observable } from 'rxjs/Observable';
import { AlertType } from './alert-type';

@Injectable()
export class AlertService {
  private subject = new Subject<Alert>();
  constructor() {}

  getAlert(): Observable<any> {
    return this.subject.asObservable();
  }

  success(
    id: string,
    msg: string,
    dismissible = true
  ) {
    this.alert(id, msg, AlertType.SUCCESS);
  }

  error(
    id: string,
    msg: string,
    dismissible = true
  ) {
    this.alert(id, msg, AlertType.DANGER);
  }

  info(
    id: string,
    msg: string,
    dismissible = true
  ) {
    this.alert(id, msg, AlertType.INFO);
  }

  warn(
    id: string,
    msg: string,
    dismissible = true,
  ) {
    this.alert(id, msg, AlertType.WARNING);
  }

  alert(
    id: string,
    msg: string,
    type: string,
    dismissible = true,
  ) {
    this.subject.next(<Alert>{
      id: id,
      msg: msg,
      type: type,
      dismissible: dismissible
    });
  }

  clear() {
    // clear alerts
    this.subject.next();
  }
}

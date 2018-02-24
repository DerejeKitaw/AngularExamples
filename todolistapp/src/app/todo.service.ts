import { Injectable } from '@angular/core';

// Firebase connections
import { AngularFireDatabase , AngularFireList} from 'angularfire2/database';

@Injectable()
export class TodoService {
// toDoList returned by Firebase is an array.
// So all array properties work on todoList
toDoList: AngularFireList<any>;

  constructor(private firebasedb: AngularFireDatabase) { }

  // To get todo list from firebase - as promiss
  // to get toDoList need to subscribe to it
  getToDoList() {
    this.toDoList = this.firebasedb.list('title');
    return this.toDoList;
  }

  // To add todo to firebase
  addTitle(title: string) {
    this.toDoList.push({
      title: title,
      isChecked: false
    });
  }

  // To check or unchecked title in firebase
  checkOrUncheckTitle($key: string, flag: boolean) {
    this.toDoList.update($key, { isChecked: flag });
  }

  // To delete or remove title from todo list
  removeTitle($key: string) {
    this.toDoList.remove($key);
  }
}

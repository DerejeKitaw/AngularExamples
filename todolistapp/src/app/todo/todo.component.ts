import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { element } from 'protractor';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  toDoListArray: any[];

  constructor(private toDoService: TodoService) { }

  ngOnInit() {
    // Get to do list when component initialized
    this.toDoService.getToDoList().snapshotChanges()
    .subscribe(item => {
      this.toDoListArray = [];
      item.forEach(y => {
        const x = y.payload.toJSON();
        x['$key'] = y.key;
        this.toDoListArray.push(x);
      });
      // sort array
      this.toDoListArray.sort((a , b) => {
        return a.isChecked - b.isChecked;
      });
    });
  }
  onAdd(itemTitle) {
    this.toDoService.addTitle(itemTitle.value);
    itemTitle.value = null;
  }
  alterCheck($key: string, isChecked: boolean) {
    this.toDoService.checkOrUncheckTitle($key, !isChecked);
  }
}

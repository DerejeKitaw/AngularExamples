import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employeeList: Employee[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    const x = this.employeeService.getAllEmployee();
    x.snapshotChanges().subscribe(item => {
      this.employeeList = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.employeeList.push(y as Employee);
      });
    });
  }
  onEdit(emp: Employee) {
    console.log('onEdit' + emp);
this.employeeService.selectedEmployee = Object.assign({}, emp);
  }
}

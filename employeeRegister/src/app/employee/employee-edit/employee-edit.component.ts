import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {

  constructor (private employeeService: EmployeeService , private router: Router) {
    // router.navigate([{outlets: {popup: ['list']}}]);
  }
  ngOnInit() {
    this.employeeService.getAllEmployee();
    this.resetForm();
  }

  onSubmit(employeeForm: NgForm) {
    this.employeeService.insertEmployee(employeeForm.value);
    this.resetForm(employeeForm);
    console.log('submited');
  }

  resetForm(employeeForm?: NgForm) {
    if ( employeeForm != null ) {
      console.log('employeeForm is not null');
      employeeForm.reset();
      this.employeeService.selectedEmployee = {
        $key: null,
        name: '',
        position: '',
        office: '',
        salary: 0
      };
    }
  }
}

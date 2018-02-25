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
    router.navigate([{outlets: {popup: ['list']}}]);
  }
  ngOnInit() {
    this.resetForm();
  }
  onSubmit(employeeForm: NgForm) {
  }
  resetForm(employeeForm?: NgForm) {
    if ( employeeForm != null ) {
      employeeForm.reset();
    }
      this.employeeService.selectedEmployee = {
        $key: null,
        name: '',
        position: '',
        office: '',
        salary: 0
      };
  }
}

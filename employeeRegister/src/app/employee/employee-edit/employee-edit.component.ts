import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
// Third pary
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {

  constructor (private employeeService: EmployeeService , private router: Router, private toastr: ToastrService) {
    // router.navigate([{outlets: {popup: ['list']}}]);
  }
  ngOnInit() {
    this.employeeService.getAllEmployee();
    this.resetForm();
  }

  onSubmit(employeeForm: NgForm) {
    if (employeeForm.value.$key == null) {
      this.employeeService.insertEmployee(employeeForm.value);
      this.toastr.success('Inserted Successfully', 'Employee Register');

    } else {
      this.employeeService.updateEmployee(employeeForm.value);
      this.resetForm(employeeForm);
      console.log('submited');
      this.toastr.success('Updated Successfully', 'Employee Register');

    }
  }

  resetForm(employeeForm?: NgForm) {
    if ( employeeForm != null ) {
      console.log('employeeForm is not null');
      employeeForm.reset();
      this.employeeService.selectedEmployee = {
        $key: null,
        name: 'kk',
        position: '',
        office: '',
        salary: 0
      };
    }

  }
}

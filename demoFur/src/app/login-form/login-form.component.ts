import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';

function emailMatcher(c: AbstractControl): {[key: string]: boolean} | null {
  let emailControl = c.get('email');
  let confirmControl = c.get('confirmEmail');

  if (emailControl.pristine || confirmControl.pristine) {
    return null;
  }

  if (emailControl.value === confirmControl.value) {
      return null;
  }
  return { 'match': true };
}

@Component({
  selector: 'app-login',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  customerForm: FormGroup;
  emailMessage: string;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.customerForm = this.fb.group({
        // =========================================================================
        // firstName validations
        // =========================================================================
        emailGroup: this.fb.group({
          email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+')]],
          confirmEmail: ['', Validators.required],
      }, {validator: emailMatcher}),
    });
}
save(): void {
  console.log('Saved: ' + JSON.stringify(this.customerForm.value));
}
}

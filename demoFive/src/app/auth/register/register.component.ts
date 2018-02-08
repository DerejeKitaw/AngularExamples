import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public auth: AuthService;

  constructor(auth: AuthService) {
    this.auth = auth;
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
    });
  }

}

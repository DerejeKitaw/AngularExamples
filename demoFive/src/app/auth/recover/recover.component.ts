import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.scss']
})
export class RecoverComponent implements OnInit {
  public recoverForm: FormGroup;
  public auth: AuthService;

  constructor(auth: AuthService) {
    this.auth = auth;
  }

  ngOnInit() {
    this.recoverForm = new FormGroup({
      email: new FormControl(),
    });
  }

}

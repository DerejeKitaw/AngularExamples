import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'pv-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  pageTitle:string='Angular Samples'
  constructor(private router: Router) { }

  ngOnInit() {
    // debugger;
  }

}

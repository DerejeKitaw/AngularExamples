import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-nav-dropdown',
  templateUrl: './app-sidebar-nav-dropdown.component.html',
  styleUrls: ['./app-sidebar-nav-dropdown.component.scss']
})
export class AppSidebarNavDropdownComponent implements OnInit {

  @Input() link: any;

  public isBadge() {
    return this.link.badge ? true : false
  }

  public isIcon() {
    return this.link.icon ? true : false
  }

  constructor() { }

  ngOnInit() {
  }

}

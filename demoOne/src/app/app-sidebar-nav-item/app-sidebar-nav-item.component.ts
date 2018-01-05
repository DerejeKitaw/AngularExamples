import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-nav-item',
  templateUrl: './app-sidebar-nav-item.component.html',
  styleUrls: ['./app-sidebar-nav-item.component.scss']
})
export class AppSidebarNavItemComponent implements OnInit {
  @Input() item: any;

  public hasClass() {
    return this.item.class ? true : false
  }

  public isDropdown() {
    return this.item.children ? true : false
  }

  public thisUrl() {
    return this.item.url
  }

  public isActive() {
    return this.router.isActive(this.thisUrl(), false)
  }

  constructor(private router: Router) { }
  ngOnInit() {
  }

}

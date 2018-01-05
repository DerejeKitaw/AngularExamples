import { Component, OnInit } from '@angular/core';

// Import navigation elements
import { navigation } from './../_nav';

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './app-sidebar-nav.component.html',
  styleUrls: ['./app-sidebar-nav.component.scss']
})
export class AppSidebarNavComponent implements OnInit {

  public navigation = navigation;

  public isDivider(item) {
    return item.divider ? true : false;
  }

  public isTitle(item) {
    return item.title ? true : false;
  }

  constructor() { }

  ngOnInit() {
  }

}

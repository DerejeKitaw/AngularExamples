import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-nav-link',
  templateUrl: './app-sidebar-nav-link.component.html',
  styleUrls: ['./app-sidebar-nav-link.component.scss']
})
export class AppSidebarNavLinkComponent implements OnInit {

  @Input() link: any;

  public hasVariant() {
    return this.link.variant ? true : false;
  }

  public isBadge() {
    return this.link.badge ? true : false;
  }

  public isExternalLink() {
    return this.link.url.substring(0, 4) === 'http' ? true : false;
  }

  public isIcon() {
    return this.link.icon ? true : false;
  }

  constructor() { }

  ngOnInit() {
  }

}

import { NavDropdownDirective } from './nav-dropdown.directive';
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNavDropdownToggle]'
})
export class NavDropdownToggleDirective {

  constructor(private dropdown: NavDropdownDirective) {}

  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();
    this.dropdown.toggle();
  }

}

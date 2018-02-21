import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvertersRoutingModule } from './inverters-routing.module';
import { InverterListComponent } from './inverter-list/inverter-list.component';

@NgModule({
  imports: [
    CommonModule,
    InvertersRoutingModule
  ],
  declarations: [InverterListComponent]
})
export class InvertersModule { }

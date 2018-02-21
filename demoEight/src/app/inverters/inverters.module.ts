import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvertersRoutingModule } from './inverters-routing.module';
import { InverterListComponent } from './inverter-list/inverter-list.component';
import { InverterService } from './inverter.service';

@NgModule({
  imports: [CommonModule, InvertersRoutingModule],
  declarations: [InverterListComponent],
  providers: [InverterService]
})
export class InvertersModule {}

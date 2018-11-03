import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProjectComponent } from './list-project/list-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { DetailProjectComponent } from './detail-project/detail-project.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListProjectComponent, EditProjectComponent, DetailProjectComponent]
})
export class ProjectModule { }

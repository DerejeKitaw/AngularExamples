import { NgModule } from '@angular/core';
import { ListProjectComponent } from './list-project/list-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { DetailProjectComponent } from './detail-project/detail-project.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ListProjectComponent, EditProjectComponent, DetailProjectComponent]
})
export class ProjectModule { }

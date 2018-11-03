import { NgModule } from '@angular/core';
import { ListProjectComponent } from './list-project/list-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { DetailProjectComponent } from './detail-project/detail-project.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: 'projects', component: ListProjectComponent},
      {path: 'projects/:id',
      // TODO:Add projectGuard
      // TODO:Add ProjectResolver
      component: DetailProjectComponent},
      {path: 'projects/:id/edit',
      // TODO:Add projectGuard
      // TODO:Add ProjectResolver
      // TODO: add `children` route for editing different part of project
      component: EditProjectComponent}
    ])
  ],
  declarations: [ListProjectComponent, EditProjectComponent, DetailProjectComponent]
})
export class ProjectModule { }

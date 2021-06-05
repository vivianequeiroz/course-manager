import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReplacePipe } from '../pipe/replace.pipe';
import { CourseInfoComponent } from './course-info.component';
import { CourseListComponent } from './course-list.component';
import { StarModule } from '../shared/component/star/star.module';

@NgModule({
  declarations: [
    CourseListComponent,
    CourseInfoComponent,
    ReplacePipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    StarModule,
    RouterModule.forChild([
      {
        path: 'courses',
        component: CourseListComponent
      },
      {
        path: 'courses/info/:id',
        component: CourseInfoComponent
      },
    ])
  ]
})
export class CourseModule{

}
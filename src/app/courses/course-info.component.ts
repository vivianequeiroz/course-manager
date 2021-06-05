import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {
  
  course: Course;

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
      next: course => {
        // making the course of this component equal to the return of the http request of the course made in course.service
        this.course = course;
      },
      error: err => console.log('Error occurred:', err)
    });
   console.log(this.course);
  }

  save():void {
    this.courseService.save(this.course);
  }
}
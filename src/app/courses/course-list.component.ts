import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

  filteredCourses: Course[] = [];
  _courses: Course[] = [];
  _filterBy: string;

  constructor(
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll(): void {              //subscribe method has callback functions as its return
    this.courseService.retrieveAll().subscribe({
      //courses is the return of what was defined in the retrieveAll() of course.service
      next: courses => {
        this._courses = courses;
        this.filteredCourses = this._courses;
      },
      error:  err => 
        console.log('Error occurred:', err)
    });
  }

  set filter(value: string) {
    this._filterBy = value;
    this.filteredCourses = this._courses.filter(
      (course: Course) => 
      course.name.toLowerCase()
      .indexOf(this._filterBy.toLowerCase()) > -1
    );
  }

  get filter() {
    return this._filterBy;
  }
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {3
  
  courseId: number;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
   this.courseId = this.activatedRoute.snapshot.params.get('id');
  }
  
}
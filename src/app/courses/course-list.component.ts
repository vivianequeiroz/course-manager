import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})
export class CouseListComponent implements OnInit {

  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Angular básico',
        imageUrl: '',
        price: 125.99,
        code: 'XPS-8796',
        duration: 200,
        rating: 7.9,
        releaseDate: 'May 2, 2021'
      },
      {
        id: 1,
        name: 'Angular intermediário',
        imageUrl: '',
        price: 225.99,
        code: 'XPS-8797',
        duration: 260,
        rating: 8.4,
        releaseDate: 'May 17, 2021'
      },
      {
        id: 1,
        name: 'Angular avançado',
        imageUrl: '',
        price: 399.99,
        code: 'XPS-8798',
        duration: 320,
        rating: 8.9,
        releaseDate: 'May 28, 2021'
      },
    ]
  }
}
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
        name: 'Angular Forms',
        imageUrl: '/assets/images/animations.png',
        price: 225.99,
        code: 'XPS-8797',
        duration: 260,
        rating: 8.4,
        releaseDate: 'May 17, 2021'
      },
      {
        id: 2,
        name: 'Angular HTTP',
        imageUrl: '/assets/images/http.png',
        price: 399.99,
        code: 'XPS-8798',
        duration: 320,
        rating: 8.9,
        releaseDate: 'May 28, 2021'
      },
      {
        id: 3,
        name: 'Angular Router',
        imageUrl: '/assets/images/router.png',
        price: 399.99,
        code: 'XPS-8799',
        duration: 320,
        rating: 8.5,
        releaseDate: 'May 30, 2021'
      },
    ]
  }
}
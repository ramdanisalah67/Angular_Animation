import { Component } from '@angular/core';
import { Course } from './Models/course.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses:Course[]=[
    {title:'Angular Complete Course 1',isActive:false},
    {title:'Angular Complete Course 2',isActive:false},
    {title:'Angular Complete Course 3',isActive:false}

  ]


}

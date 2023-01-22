import { Component } from '@angular/core';
import { LotService } from '../services/lot.service';

@Component({
  selector: 'lot-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  constructor(public lotService: LotService) {}
}

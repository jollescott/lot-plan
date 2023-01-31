import { Component, OnInit } from '@angular/core';
import { LotCourse } from '../interfaces/course.interface';
import { LotProgramme } from '../interfaces/programme.interface';
import { LotService } from '../services/lot.service';

@Component({
  selector: 'lot-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  public programmes: LotProgramme[] | undefined;
  public courses: LotCourse[] | undefined;

  constructor(public lotService: LotService) {}

  async ngOnInit(): Promise<void> {
    this.programmes = await this.lotService.getProgrammes();
    this.courses = await this.lotService.getCourses('BME');
  }
}

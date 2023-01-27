import { Component, OnInit } from '@angular/core';
import { LotService } from '../services/lot.service';

@Component({
  selector: 'lot-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  constructor(public lotService: LotService) {}

  async ngOnInit(): Promise<void> {
    await this.lotService.getProgrammes();
  }
}

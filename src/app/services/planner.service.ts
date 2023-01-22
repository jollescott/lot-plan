import { Injectable } from '@angular/core';
import { LotPeriod } from '../interfaces/period.interface';
import { LotService } from './lot.service';

const PLACEHOLDER_PERIODS: LotPeriod[] = [
  {
    index: '1',
    year: '4'
  },
  {
    index: '2',
    year: '4'
  },
  {
    index: '3',
    year: '4'
  },
  {
    index: '4',
    year: '4'
  },
  {
    index: '1',
    year: '5'
  },
  {
    index: '2',
    year: '5'
  },
  {
    index: '3',
    year: '5'
  },
  {
    index: '4',
    year: '5'
  },
]

@Injectable({
  providedIn: 'root'
})
export class PlannerService {
  public periods = PLACEHOLDER_PERIODS;

  constructor(private lot: LotService) { }

  assignCourse(index: string, year: string, courseId: number) {
    const course = this.lot.getCourses().find(c => c.courseId === courseId);

    if (!course) {
      console.warn(`Course ${courseId} was not found`);
      return;
    }

    const period = this.periods.find(p => p.index === index && p.year === year);

    if (!period) {
      console.warn(`Course ${period},${year} was not found`);
      return;
    }

    if (!period.courses) {
      period.courses = [course];
    } else {
      period.courses = [...period.courses, course];
    }
  }

}

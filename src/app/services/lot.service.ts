import { Injectable } from '@angular/core';
import { LotCourse } from '../interfaces/course.interface';

const PLACEHOLDER_COURSES: LotCourse[] = [
  {
    courseId: 17294,
    courseCode: "KIMN01", 
    name: "Immunotechnology",
    credits: 7.5,
    cycle: 'A'
  }, 
  {
    courseId: 17206,
    courseCode: "FMAB20", 
    name: "Linear Algebra",
    credits: 6,
    cycle: 'G1'
  }, 
]

@Injectable({
  providedIn: 'root'
})
export class LotService {

  constructor() { }

  getCourses(): LotCourse[] {
    return PLACEHOLDER_COURSES;
  }
}

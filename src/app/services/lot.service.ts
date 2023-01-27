import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, firstValueFrom, map, Observable, throwError } from 'rxjs';
import { LotCourse } from '../interfaces/course.interface';
import { LotProgramme } from '../interfaces/programme.interface';

const PLACEHOLDER_COURSES: LotCourse[] = [
  {
    courseId: 17294,
    courseCode: 'KIMN01',
    name: 'Immunotechnology',
    credits: 7.5,
    cycle: 'A',
  },
  {
    courseId: 17206,
    courseCode: 'FMAB20',
    name: 'Linear Algebra',
    credits: 6,
    cycle: 'G1',
  },
];

interface LotProgrammesResponse {
  programmeCode: string;
  programme_en: string;
}

@Injectable({
  providedIn: 'root',
})
export class LotService {
  private readonly LOT_ROOT = 'https://api.lth.lu.se';

  constructor(private httpClient: HttpClient) {}

  getCourses(): LotCourse[] {
    return PLACEHOLDER_COURSES;
  }

  async getProgrammes(): Promise<LotProgramme[]> {
    const programmesObservable = this.httpClient
      .get<LotProgrammesResponse[]>(`${this.LOT_ROOT}/lot/courses/programmes`)
      .pipe(
        map((x) =>
          x.map(
            (y) =>
              ({
                code: y.programmeCode,
                name: y.programme_en,
              } as LotProgramme)
          )
        ),
        catchError((error) => {
          return throwError(() => error);
        })
      );

    const programmes = await firstValueFrom(programmesObservable);
    return programmes;
  }
}

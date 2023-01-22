import { Pipe, PipeTransform } from '@angular/core';
import { LotCourse } from '../interfaces/course.interface';
import { LotPeriod } from '../interfaces/period.interface';

@Pipe({
  name: 'periodCredits'
})
export class CourseCreditsPipe implements PipeTransform {

  transform(value: LotCourse[] | undefined, ...args: unknown[]): number {
    console.log(value);
    return value?.map(c => c.credits).reduce((sum, c) => sum + c) ?? 0;
  }
}

import { Component, Input } from '@angular/core';
import { LotCourse } from 'src/app/interfaces/course.interface';
import { LotPeriodIndex, LotPeriodYear } from 'src/app/interfaces/period.interface';
import { PlannerService } from 'src/app/services/planner.service';

@Component({
  selector: 'lot-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.scss']
})
export class SlotComponent {
  @Input() course?: LotCourse;
  @Input() index: LotPeriodIndex = '1';
  @Input() year: LotPeriodYear = '4';

  public targeted = false;

  constructor(private planner: PlannerService) {}

  onDragOver(event: DragEvent) {
    event.preventDefault()
    this.targeted = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault()
    this.targeted = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault()

    this.targeted = false;
    const courseIdData = event.dataTransfer?.getData('text/plain')

    if(!courseIdData) {
      console.warn('Undefined course identifier was dropped.');
      return;
    }

    const courseId = parseInt(courseIdData);
    this.planner.assignCourse(this.index, this.year, courseId);
  }
}

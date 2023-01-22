import { Component, Input } from '@angular/core';
import { LotCourse } from '../interfaces/course.interface';

@Component({
  selector: 'lot-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
  @Input() public course?: LotCourse;

  onDragStart(event: DragEvent) {
    if (!this.course) {
      return;
    }

    event.dataTransfer?.clearData()
    event.dataTransfer?.setData('text/plain', this.course?.courseId.toString())
  }
}

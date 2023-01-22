import { Component } from '@angular/core';
import { PlannerService } from '../services/planner.service';

@Component({
  selector: 'lot-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss'],
})
export class PlannerComponent {
  constructor(public planner: PlannerService) { }
}

import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Stopwatch } from '../timer/stopwatch';
@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent {
  private stopwatch = new Stopwatch();
  constructor(
    private ts: ServiceService,
  ) { }

  allTimes = this.ts.allTimes.reverse();

}

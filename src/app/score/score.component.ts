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
  ) {
    console.log(this.ts.allTimes);
  }

  allTimes = this.ts.allTimes;

  showTimes = this.allTimes.length === 0 ? false : true;

  delElementScore = (element: number) => {
    this.ts.allTimes.splice(element, 1);
  }

}

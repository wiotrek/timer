import { Component } from '@angular/core';
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
    console.log(this.sortTimes);
  }
  private allTimes = this.ts.allTimes;
  public showTimes = this.allTimes.length === 0 ? false : true;
  public amountElementsOfSide = 0;
  protected sortTimes = this.ts.allTimes;

  delElementScore = (element: number) => {
    this.ts.allTimes.splice(element, 1);
  }
  bestScore(): number {
    let bestArr: any;
    bestArr  = this.sortTimes.sort((a, b) => a - b);
    let best = Number(bestArr[0]);
    return best;
  }
  worstScore(): number {
    let worstArr: any;
    worstArr  = this.sortTimes.sort((a, b) => a - b);
    let best = Number(worstArr[worstArr.length - 1]);
    return best;
  }
}

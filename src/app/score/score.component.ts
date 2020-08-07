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
  }
  private allTimes = this.ts.allTimes;
  public showTimes = this.allTimes.length === 0 ? false : true;
  public amountElementsOfSide = 0;

  delElementScore = (element: number) => {
    if (this.ts.allTimes.length > 1) {
      this.ts.allTimes.splice(element, 1);
    }
  }
  bestScore(): string {
    // copy values array allTimes without references
    let sortTimes = this.allTimes.slice();
    sortTimes  = sortTimes.sort((a, b) => a - b);
    const best = Number(sortTimes[0]);
    return this.stopwatch.timer(best);
  }
  worstScore(): string {
    let sortTimes = this.allTimes.slice();
    sortTimes  = sortTimes.sort((a, b) => a - b);
    const worst = Number(sortTimes[sortTimes.length - 1]);
    return this.stopwatch.timer(worst);
  }
  avgScore(): string {
    const sortTimes = this.allTimes.slice();
    const reducer = (accumulator: number, currentValue: number) => accumulator + currentValue;
    let score = sortTimes.reduce(reducer);
    score = score / sortTimes.length;
    return this.stopwatch.timer(score);
  }
  avg12Score(): string {
    const sortTimes = this.allTimes.slice(0, 12);
    const reducer = (accumulator: number, currentValue: number) => accumulator + currentValue;
    let score = sortTimes.reduce(reducer);
    score = score / sortTimes.length;
    return this.stopwatch.timer(score);
  }
}

import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Stopwatch } from '../timer/stopwatch';
import { findLast } from '@angular/compiler/src/directive_resolver';
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

  public allTimes = this.ts.allTimes;
  public showTimes = this.allTimes.length === 0 ? false : true;
  public amountElementsOfSide = 0;

  delElementScore = (element: number) => {
    this.ts.allTimes.splice(element, 1);
  }

  bestScore(): number {
    const bestArr = this.ts.allTimes.sort((a, b) => a - b);
    const best = Number(bestArr[0]);
    return best;
  }
  worstScore(): number {
    const worstArr = this.ts.allTimes.sort((a, b) => a - b);
    const worst = worstArr[worstArr.length - 1];
    return worst;
  }
}

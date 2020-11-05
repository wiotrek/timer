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
  ) {}
  public amountElementsOfSide = 0;

  public scoresAll: number;
  public scoresLength: number;

  public scoreBest: string;
  public scoreWorst: string;

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    this.scoresGet();
    this.scoresBest();
    this.scoresWorst();
  }

  delElementScore = (id: number) => {
    this.ts.scoreDel(id).subscribe(
      response => {
        this.scoresGet();
        this.scoresBest();
        this.scoresWorst();
      },
      error => {}
    );
  }

  // avgScore(): string {
  //   const sortTimes = this.allTimes.slice();
  //   const reducer = (accumulator: number, currentValue: number) => accumulator + currentValue;
  //   let score = sortTimes.reduce(reducer);
  //   score = score / sortTimes.length;
  //   return this.stopwatch.timer(score);
  // }
  // avg12Score(): string {
  //   const sortTimes = this.allTimes.slice(0, 12);
  //   const reducer = (accumulator: number, currentValue: number) => accumulator + currentValue;
  //   let score = sortTimes.reduce(reducer);
  //   score = score / sortTimes.length;
  //   return this.stopwatch.timer(score);
  // }


  public scoresGet = () => {
    this.ts.scoreGet().subscribe(
      response => {
        this.scoresAll = response;
        this.scoresLength = response.length;
      },
      err => {}
    );
  }

  public scoresBest = () => {
    this.ts.scoreBest().subscribe(
      response => {
        this.scoreBest = this.stopwatch.timer(response[0].name);
      },
      err => {
        this.scoreBest = '-';
      }
    );
  }

  public scoresWorst = () => {
    this.ts.scoreWorst().subscribe(
      response => {
        this.scoreWorst = this.stopwatch.timer(response[0].name);
      },
      err => {
        this.scoreWorst = '-';
      }
    );
  }

}

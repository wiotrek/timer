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

    if (this.ts.isLogIn === true){
      this.scoresGet();
      this.scoresBest();
      this.scoresWorst();
    }
  }

  public delElementScore = (id: number) => {
    this.ts.scoreDel(id).subscribe(
      response => {
        this.scoresGet();
        this.scoresBest();
        this.scoresWorst();
      },
      error => {}
    );
  }

  private scoresGet = () => {
    this.ts.scoreGet().subscribe(
      response => {
        if (response.length > 0){
          this.scoresAll = response;
          this.scoresLength = response.length;
        }
      },
      err => {}
    );
  }

  private scoresBest = () => {
    this.ts.scoreBest().subscribe(
      response => {
        if (response.length > 0){
          this.scoreBest = this.stopwatch.timer(response[0].name);
        }
      },
      err => {
        this.scoreBest = '-';
      }
    );
  }

  private scoresWorst = () => {
    this.ts.scoreWorst().subscribe(
      response => {
        if (response.length) {
          this.scoreWorst = this.stopwatch.timer(response[0].name);
        }
      },
      err => {
        this.scoreWorst = '-';
      }
    );
  }

}

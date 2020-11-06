import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Stopwatch } from '../timer/stopwatch';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private stopwatch = new Stopwatch();
  constructor(
    private userService: ServiceService,
  ) {
    this.getUsername();
   }

  public username: string;
  public yourAmountOfTimes: number;
  public yourBestTime: string;
  public yourWorstTime: string;


  ngOnInit(): void {
    this.scoresGet();
    this.scoresBest();
    this.scoresWorst();
  }

  private getUsername = () => {
    this.userService.getUsername().subscribe(
      response => {
        this.username = response.username;
      },
      err => {
        this.username = 'noname';
      }
    );
  }

  public logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('id_user');
    localStorage.clear();
    window.location.href = this.userService.localhost;
  }

  private scoresGet = () => {
    this.userService.scoreGet().subscribe(
      response => {
        if (response.length > 0){
          this.yourAmountOfTimes = response.length;
        }else {
          this.yourAmountOfTimes = 0;
        }
      },
      err => {
        this.yourAmountOfTimes = 0;
      }
    );
  }

  private scoresBest = () => {
    this.userService.scoreBest().subscribe(
      response => {
        if (response.length > 0){
          this.yourBestTime = this.stopwatch.timer(response[0].name);
        }else {
          this.yourBestTime = '00:00:00';
        }
      },
      err => {
        this.yourBestTime = '00:00:00';
      }
    );
  }

  private scoresWorst = () => {
    this.userService.scoreWorst().subscribe(
      response => {
        if (response.length > 0){
          this.yourWorstTime = this.stopwatch.timer(response[0].name);
        }else {
          this.yourWorstTime = '00:00:00';
        }
      },
      err => {
        this.yourWorstTime = '00:00:00';
      }
    );
  }
}

import { Component, HostListener } from '@angular/core';
import { Stopwatch } from './stopwatch';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})

export class TimerComponent {
  constructor(
    private ts: ServiceService,
    ) {}
  public time = '00 : 00 : 00';
  public running = false;
  private stopwatch = new Stopwatch();
  private interval: any;
  public START = 'PRESS KEY';

  @HostListener('window:keydown', ['$event'])
  @HostListener('click', ['$event.target'])
  handleKeyDown(event: KeyboardEvent): void {
    this.onClick();
  }

  onClick(): void {
    if (!this.running) {
      this.stopwatch.start();
      this.interval = setInterval(
        () => {
          this.time = this.stopwatch.display();
        }, 10);
      this.running = true;
      this.START = 'STOP';
    } else {
      clearInterval(this.interval);
      this.time = this.stopwatch.stop();
      this.ts.allTimes.unshift(this.stopwatch.elapsedTime);
      const current = this.stopwatch.timeFloor(this.stopwatch.elapsedTime);
      this.scorePost(current);
      this.running = false;
      this.START = 'PRESS KEY';
    }
  }

  private scorePost = (current: number) => {

    const goal = {
      name: current,
    };

    this.ts.scorePost(goal).subscribe(
      response => {
        console.log('Wyslane');
      },
      err => {
        console.log(err);
      }
    );
  }

}

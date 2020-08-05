import { Component, OnInit } from '@angular/core';
import { Stopwatch } from './stopwatch';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
  time = 0 ;
  private running = false;
  private stopwatch = new Stopwatch();
  private interval: any;

  onClick(): void {
    if (!this.running) {
      this.stopwatch.start();
      this.interval = setInterval(
        () => {
          this.time = this.stopwatch.display();
        }, 10);
      this.running = true;
    } else {
      clearInterval(this.interval);
      this.time = this.stopwatch.stop();
      this.running = false;
    }
  }

}

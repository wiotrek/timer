import { Component } from '@angular/core';
import { Stopwatch } from './stopwatch';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
  constructor(private ts: ServiceService) {
    console.log(this.ts.allTimes);
  }
  public time = '00 : 00 : 00';
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
      this.ts.allTimes.unshift(this.stopwatch.elapsedTime);
      this.running = false;
    }
  }

}

import { tokenName } from '@angular/compiler';

export class Stopwatch {
    private startTime: number;
    public elapsedTime: number;

    start(): void {
        this.startTime = performance.now();
    }
    stop(): string{
        const elapsedTime = this.display();
        return elapsedTime;
    }

    display(): any {
        this.elapsedTime = performance.now() - this.startTime;
        this.elapsedTime = this.timeFloor(this.elapsedTime);
        return this.timer(this.elapsedTime);
    }

    timeFloor(time: number): number {
        time = Math.floor(time / 10);
        return time;
    }

    timer(time: number): string {
        const timerArr = [0, 0, 0];

        timerArr[2] = time;
        if (timerArr[2] >= 100) {
            while (timerArr[2] >= 100){
             timerArr[1] += 1;
             timerArr[2] -= 100;
            }
        }
        if (timerArr[1] >= 60) {
            while (timerArr[1] >= 60){
             timerArr[0] += 1;
             timerArr[1] -= 60;
            }
        }
        return `${this.add0(timerArr[0], 2)}:${this.add0(timerArr[1], 2)}:${this.add0(timerArr[2], 2)}`;
    }

    // adding 0 previous time
    private add0(value: number, count: number): string {
        let result = value.toString();
        for (; result.length < count; --count) {
            result = '0' + result;
        }
        return result;
    }

}

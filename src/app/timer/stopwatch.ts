export class Stopwatch {
    private startTime: number;

    start(): void {
        this.startTime = performance.now();
    }
    stop(): number{
        const elapsedTime = this.display();
        return elapsedTime;
    }

    display(): any {
        let elapsedTime = performance.now() - this.startTime;
        elapsedTime = Math.floor(elapsedTime / 10);
        return this.format(elapsedTime);
        // return elapsedTime;
    }

    format(time: number): any {
        if (time < 100) {
            return `00:00:${time}`;
        } else {
            if (time < 6000) {
                const timeArr = time.toString().split('');
                let arr: any;
                arr[0] = timeArr[0];
                arr[1] = timeArr[1];
                arr[2] = ':';
                arr[3] = timeArr[3];
                arr[4] = timeArr[4];
                return `00:${arr.join(',')}`;
            }
        }

    }

}

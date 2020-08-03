export class Stopwatch {
    private startTime: number;

    start(): void {
        this.startTime = performance.now();
    }
    stop(): number{
        const elapsedTime = this.display();
        return elapsedTime;
    }

    display(): number {
        let elapsedTime = performance.now() - this.startTime;
        elapsedTime = Math.floor(elapsedTime / 10);
        return elapsedTime;
    }

}

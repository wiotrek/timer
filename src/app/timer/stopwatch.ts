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
        this.format(elapsedTime);
        return elapsedTime;
    }

    format(time: number): void {
        let isEven: any = time % 2 ;
        isEven = isEven ? true : false;

        let amountPair = 0;

        const timeArr: any = time.toString().split('');
        console.log(timeArr.length);
        console.log(isEven);

        if (isEven) {
            // how much is pair
            amountPair = timeArr / 2;
        }
        let semiArr: [];
        for (let i = 0; i < amountPair; i++) {
            semiArr = [];
            let quarterArr: any;
            for (let j = amountPair; j < amountPair + 1; j++) {
                quarterArr = array[j];
            }
        }

        let i = 0;
        while (i < amountPair + 2) {
            i = + 2;
            console.log('dupa');

        }
    }

}

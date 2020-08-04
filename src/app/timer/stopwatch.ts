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

    format(time: number): string {
        if (time < 100) {
            let timeStr: any = '00:00:' + time;
            return timeStr;
        } else {
            const timeArrStr: any = time.toString().split('');
        
            if (time < 6000) {
    
            }
        }
        


        alert('dupa');
        let isEven: any = time % 2 ;
        isEven = isEven ? true : false;

        

        let amountPair = 0;
        
        // if (isEven) {
        //     // how much is pair
        //     amountPair = timeArrStr.length / 2;
        // }
        
    }

}

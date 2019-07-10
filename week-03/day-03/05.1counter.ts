'use strict';

class Counter {
    integer: number;

    constructor(integer: number = 0) {
        this.integer = integer;
    }
    
    add(numbah: number = undefined): void {
        if (numbah === undefined) {
            this.integer++;
        } else {
            this.integer = this.integer + numbah;
        }
    }



    get(): number {
        return this.integer;
    }

    reset(): void {
        this.integer = 0;
    }
}

let value: Counter = new Counter(50);
value.add();
console.log(value);
value.reset();
console.log(value);
value.add();
console.log(value);
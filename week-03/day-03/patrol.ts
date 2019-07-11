'use strict';

class Station {
    gasAmount: number= 100000;

    refill (car: Car): Car {
        this.gasAmount = this.gasAmount-car.capacity;
        car.gasAmount = car.capacity;
        return car;
    }

}

class Car {
    gasAmount: number = 0;
    capacity: number = 100;

    constructor() {
        this.gasAmount = 0;
        this.capacity = 100;
    }
}
let car1 = new Car();
let shell = new Station();
console.log(car1);
shell.refill(car1);


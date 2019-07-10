"use strict";

class Counter {
  counter: number;

  constructor(number: number = 0) {
    this.counter = number;
  }
  add(number: number = undefined): void {
    if (number === undefined) {
      this.counter++;
    } else {
      this.counter = this.counter + number;
    }
  }
  get(): number {
    return this.counter;
  }
  reset(): number {
    return (this.counter = 0);
  }
}
let number: Counter = new Counter();

console.log(number);
number.add();
console.log(number);
number.add(15);
console.log(number);

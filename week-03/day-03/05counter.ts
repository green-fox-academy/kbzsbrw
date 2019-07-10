"use strict";

class Counter {
  counter: number = 0;

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
  get() {
    return this.counter;
  }
  reset() {
    this.counter = 0;
  }
}
let number: Counter = new Counter();

console.log(number);
number.add();
console.log(number);
number.add(15);
console.log(number);

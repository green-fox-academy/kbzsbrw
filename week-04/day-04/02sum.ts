"use strict";

let test = require("tape");

class Sum {
  numbers: number[];
  constructor(numbers: number[]) {
    this.numbers = numbers;
  }

  sum():number {
    let sum: number = 0;
    this.numbers.forEach(element => {
      sum = sum + element;
    })
    return sum;
  }
}
test("see if sum", t => {
  let numbers1: Sum = new Sum([1, 3, 5, 7, 8]);
  t.deepEqual(numbers1.numbers, [1, 3, 5, 7, 8]);
  t.equal(numbers1.sum(), 1 + 3 + 5 + 7 + 8);
  t.end();
});
test("see if empty", t => {
  let numbers1: Sum = new Sum([]);
  t.deepEqual(numbers1.numbers, []);
  t.equal(numbers1.sum(), 0);
  t.end();
// test("see if multiarryy", t => {
//   let numbers1: Sum = new Sum([[1,2],[3,4]]);
//   t.deepEqual(numbers1.numbers, []);
//   t.equal(numbers1.sum(), 0);
//   t.end();
// });

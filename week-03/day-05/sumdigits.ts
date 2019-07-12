"use strict";

function addDigits(n: number): number {
  if (n === 0) {
    return 0;
  } else {
    // Math.floor((n - Math.floor((n / 10))) * 10);
    return Math.floor((n - Math.floor(n / 10) * 10)) + addDigits(Math.floor(n/10));
  }
}
// let n = 3456;
// console.log((n / 10 - Math.floor((n = n / 10))) * 10);
console.log(addDigits(34562));

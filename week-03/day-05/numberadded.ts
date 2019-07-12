"use strict";

let sum: number = 0;
let vari: number = 0;
function addsN(n: number): number {
  if (n === 1) {
    return 1;
  } else {
    return n + addsN(n - 1);
  }
}
console.log(addsN(10));

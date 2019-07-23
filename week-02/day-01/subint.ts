"use strict";
//  Create a function that takes a number and an array of numbers as a parameter
//  Returns the indices of the numbers in the array of which the first number is a part of
//  Or returns an empty list if the number is not part of any of the numbers in the array

// Example
let digits: number [] = [];
function digitsOfNumber(number: number): void {
  if (number / 10 > 10) {
    digitsOfNumber(number / 10);
  } else {
      digits.push(Math.floor(number/10));
      
      
  }
}

function subint(number: number, array: number[]): number[] {
  // for (let i: number; i<array.length; i++){
  // }
  return array;
}
console.log(subint(1, [1, 11, 34, 52, 61]));
// should print: `[0, 1, 4]`
console.log(subint(9, [1, 11, 34, 52, 61]));
// should print: '[]'

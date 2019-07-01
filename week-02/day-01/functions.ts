'use strict';

let numberToMultiply: number = 12;

let twice: number = numberToMultiply*2;
console.log(twice);

function printNumberAndChangeIt(inputNumber: number) {
    let doubledValue: number = inputNumber*2;
    console.log(doubledValue);
}

printNumberAndChangeIt(12);
printNumberAndChangeIt(100);
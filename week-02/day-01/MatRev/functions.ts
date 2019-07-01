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

function printNumberAndChangeItWithDefaultNum(inputNumber: number = 66) {
    let doubledValue: number = inputNumber*2;
    console.log(doubledValue);
}

printNumberAndChangeItWithDefaultNum();
printNumberAndChangeItWithDefaultNum(100);

function multiplication(base: number, another: number): number {
    return base*another;
}

console.log(multiplication(5, 6));
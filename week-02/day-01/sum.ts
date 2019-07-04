"use strict";

function summa(number: number) {
    let sum1: number = 0;
    for (let i: number = 0; i<=number; i++) {
        sum1 = sum1+i;
    }
    console.log(sum1);
}
summa(5);
"use strict";

function factorio(input: number) {
     let sum1: number = 1;
    for (let i: number = 1; i<=input; i++) {
        sum1=i*sum1;

    }
    console.log(sum1)
} 
factorio(5);
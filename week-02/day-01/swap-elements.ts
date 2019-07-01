'use strict';

let abc: string[] = ["Arthur", "Boe", "Chloe"];

let swap: string = abc[0];
abc[0]=abc[2];
abc[2]=swap;
console.log(abc);
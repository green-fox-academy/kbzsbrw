'use strict';

let a: number = 25;
let out: number = 0;

if ((a/2)<=Math.floor(a/2)) {
    out++;
}

console.log(out);

let b: number = 13;
let out2: string = '';

if (b<10) {
    out2="Less!";
} else if (b>20) {
    out2="More!";
} else {
    out2="Sweet!";
}

console.log(out2);

let c: number = 123;
let credits: number = 49;
let isBonus: boolean = false;

// if credits are at least 50,
// and is_bonus is false decrement c by 2
// if credits are smaller than 50,
// and is_bonus is false decrement c by 1
// if is_bonus is true c should remain the same
if (isBonus) {
    c=c;
} else if (credits<50) {
    c=c-1;
} else {
    c=c-2;
}
console.log(c);

let d: number =  9;
let time: number = 190;
let out3: string = '';

// if d is dividable by 4
// and time is not more than 200
// set out3 to "check"
// if time is more than 200
// set out3 to "Time out"
// otherwise set out3 to "Run Forest Run!"
if ((d/4)<=Math.floor(d/4)&&time<=200) {
    out3="Check";
} else if(time>200) {
    out3="Run Forest Run!";
} else {
    out3="Time Out";
}
console.log(out3);
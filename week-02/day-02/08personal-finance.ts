"use strict";

let expances: number[] = [500, 1000, 1250, 175, 800, 120];
let spent: number = 0;
expances.forEach(function(num) {
    spent= spent+num;
})
let maximum: number = 0;
for (let i: number = 0; i<expances.length; i++) {
    if (expances[i]>maximum) {
        maximum= expances[i]
    }
}
let sortedExpances= expances.sort((a,b)=>b-a);
console.log("We spent "+spent);
console.log("Maximum is "+maximum);
console.log("Minimum is "+sortedExpances[sortedExpances.length-1]);
console.log("Average is "+Math.round(spent/sortedExpances.length*100)/100);
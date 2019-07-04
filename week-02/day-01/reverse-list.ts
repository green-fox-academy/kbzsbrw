"use strict";

let numList: number [] = [3, 4, 5, 6, 7];

let sortedList: number[] = numList.sort((a,b)=>b-a);
console.log("v1: "+sortedList);

let tempList: number[] = [];
for (let i: number = 0; i<numList.length; i++) {
    tempList[i] = numList[numList.length-1-i]
}
console.log("v2: "+tempList);
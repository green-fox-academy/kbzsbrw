'use strict';

//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `true` sort that list descending

//  Example:
let arrayOfNums: number [] = [34, 12, 24, 9, 5];

function bubble (array: number []): number [] {
let sortedArray: number [] =arrayOfNums.sort(function(a, b){return a-b});
    return sortedArray;
}
function advancedBubble (array: number [],way: boolean): number [] {
    if(way) {
        let sortedArray: number [] =arrayOfNums.sort(function(a, b){return a-b});
        return sortedArray;
    } else {
        let sortedArray: number [] =arrayOfNums.sort(function(a, b){return b-a});
        return sortedArray;

    }
}

console.log(bubble(arrayOfNums));
//  should print [5, 9, 12, 24, 34]
console.log(advancedBubble(arrayOfNums, false));
console.log(advancedBubble(arrayOfNums, true));
//  should print [34, 24, 12, 9, 5]
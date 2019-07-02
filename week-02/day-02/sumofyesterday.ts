'use strict';

let list: number [] = [1, 3, 4, 1, 5];

list.reverse;
let listWithCubes: number [] = list.map(function(element){
    return element ** 3;
})

console.log(listWithCubes);

function cubeNumbers(numbers: number[]): number[] {
    let listofCube: number [] = numbers.map(function(element){
            return element ** 3;
    })
    return listofCube;
}

console.log(cubeNumbers(list));
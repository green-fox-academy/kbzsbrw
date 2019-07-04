'use strict';

let myName: string = "Zsolt";
let hisName: string = "Zoli";
/*
console.log(myName);
console.log(hisName);
*/
let firstTable: string[] = ["Zsolt","Zoli","Dani", "Evi"];
console.log(firstTable[0]);

if (firstTable[0]= myName) {
    console.log("I sit at the first table");
} else {
    console.log("You sit another table");
}
firstTable.forEach(function (item) {
    console.log(item);
})
firstTable[4] = "Liza";
for (let i: number = 0; i<firstTable.length;i++) {
    console.log(firstTable[i]);
}

let diffArray: [string, boolean, string] = ["Mark", true, "mazli"];
console.log(diffArray);

let onlyTwoArray: Array<boolean | number> = [2, false, 3, true, true, 3, 313];


diffArray.splice(0, 1, "Zoli", );

diffArray.forEach(function (item) {
    console.log(item);
})

let doubled: number[] = [1,2,3,4,5].map(function(i){
    return i *2;
}).filter(function(item){
    return item % 2 ===1;
})
console.log("doubled")

console.log(doubled)
let odds: number[] = [1,2,3,4,5].filter(function(item) {
    return item % 2 !== 0;
})
console.log(odds);

let array1: number[] = [1,2];
let array2: number[] = [3,4];

let array3: number[] = [...array1, ...array2];
console.log(array3);
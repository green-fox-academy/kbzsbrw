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
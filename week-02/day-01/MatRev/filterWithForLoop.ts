'use strict';

let originalNames: string[] = ["Captain Marvel", "Winter Soldier", "black Panther", "Mark"];
let originalNames2: string[] = ["maki", "captain kuki", "captain maki", "baki", "captain nusi"];

function filterNamesLongerThanFive (names: string[]): string[] {
    let filteredNames: string [] = [];
    for (let i: number = 0; i< names.length; i++) {
        if (names[i].length>5) {
            filteredNames.push(names[i]);
        }
    }
    return filteredNames;
}

console.log(filterNamesLongerThanFive(originalNames));
console.log(filterNamesLongerThanFive(originalNames2));
'use strict';

let names: string[] = ["Captain Marvel", "Winter Soldier", "black Panther", "Mark"];

function filterNamesLongerThanFive (names: string[]): string[] {
    let filteredNames: string [] = [];
    for (let i: number = 0; i< names.length; i++) {
        if (names[i].length>5) {
            filteredNames.push(names[i]);
        }
    }
    return filteredNames;
}

console.log(filterNamesLongerThanFive(names));
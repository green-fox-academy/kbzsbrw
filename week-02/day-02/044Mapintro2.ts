-"use strict";

let newMap = new Map([
  ["978-1-60309-452-8", "A letter jo Jo"],
  ["978-1-60309-459-7", "Lupus"],
  ["Red Panda and Moon Bear", "978-1-60309-444-3"],
  ["978-1-60309-461-0", "The Lab"]
]);
console.log(newMap);
// for (let i: number = 0; i<newMap.size; i++) {
//     console.log(newMap.entries+"(ISBN: "+newMap.values(i));
// }
function logMapElements(value: string, key: string) {
    console.log(`${value} (ISBN: ${key})`);
}

newMap.forEach(logMapElements);
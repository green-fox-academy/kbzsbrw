'use strict';

import object = require("./matrev/object");
let map: any = {

};
console.log(map);

let keyArray: number[] = [97, 98, 99, 65, 66, 67];
let valueArray: string[] = ["a", "b", "c", "A", "B", "C"];

for (let i: number = 0; i<keyArray.length; i++){
    map [`${keyArray[i]}`] = valueArray[i];
}
console.log(Object.keys(map));
//console.log(Object.values(map));
map[68]="D";
console.log(map);
console.log(Object.keys(map).length);
console.log(map[99]);
delete map[97];
console.log(map);
console.log(map[100]);
map = {};
console.log(map);







'use strict';

let mapIntro = new Map;
console.log(mapIntro.values());
mapIntro.set(97, "a");
mapIntro.set(98, "b");
mapIntro.set(99, "c");
mapIntro.set(65, "A");
mapIntro.set(66, "B");
mapIntro.set(67, "C");
console.log(mapIntro.keys());
console.log(mapIntro.values());
mapIntro.set(68, "D");
console.log(mapIntro.size);
console.log(mapIntro.get(99))
mapIntro.delete(97);
mapIntro.has(100);
console.log(mapIntro);
mapIntro.clear;
console.log(mapIntro);






// import object = require("./matrev/object");
// let map: any = {

// };
// console.log(map);

// let keyArray: number[] = [97, 98, 99, 65, 66, 67];
// let valueArray: string[] = ["a", "b", "c", "A", "B", "C"];

// for (let i: number = 0; i<keyArray.length; i++){
//     map [`${keyArray[i]}`] = valueArray[i];
// }
// console.log(Object.keys(map));
// //console.log(Object.values(map));
// map[68]="D";
// console.log(map);
// console.log(Object.keys(map).length);
// console.log(map[99]);
// delete map[97];
// console.log(map);
// console.log(map[100]);
// map = {};
// console.log(map);

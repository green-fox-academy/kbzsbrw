"use strict";

let newMap = new Map();

newMap.set(97, "a");
newMap.set(98, "b");
newMap.set(99, "c");
newMap.set(65, "A");
newMap.set(66, "B");
newMap.set(67, "C");

console.log(newMap);
console.log(newMap.values());
console.log(newMap.keys());
newMap.set(68, "D");
console.log(newMap.size);
console.log(newMap.get(97));
newMap.delete(97);
console.log(newMap.has(100));
newMap.clear;




// let productDatabase: any = {
//   Eggs: 200,
//   Milk: 200,
//   Fish: 400,
//   Apples: 150,
//   Bread: 50,
//   Chicken: 550
// };
// console.log("The price of the fish is " + productDatabase.Fish);

// let sum: number = 0;
// Object.values(productDatabase).forEach(function(num: any) {
//   sum = sum + num;
// });
// console.log(
//   "The average price is " + sum / Object.values(productDatabase).length
// );
// let cheaperThan: number = 0;
// function cheaper(price: any) {
//   for (let i: any = 0; i<Object.values(productDatabase).length; i++)
//     if (Object.values(productDatabase)[i] < price) {
//       cheaperThan++;
//     }
  
//   console.log("There are "+cheaperThan+" product(s) cheaper than "+price);
// }
// cheaper(300);
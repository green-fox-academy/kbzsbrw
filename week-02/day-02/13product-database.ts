"use strict";
/// not ready!
let productDatabase: any = {
  Eggs: 200,
  Milk: 200,
  Fish: 400,
  Apples: 150,
  Bread: 50,
  Chicken: 550
};
console.log("The price of the fish is " + productDatabase.Fish);

let sum: number = 0;
Object.values(productDatabase).forEach(function(num: any) {
  sum = sum + num;
});
console.log(
  "The average price is " + sum / Object.values(productDatabase).length
);
let cheaperThan: number = 0;
function cheaper(price: any) {
  for (let i: any = 0; i<Object.values(productDatabase).length; i++)
    if (Object.values(productDatabase)[i] < price) {
      cheaperThan++;
    }
  
  console.log("There are "+cheaperThan+" product(s) cheaper than "+price);
}
cheaper(300);
"use strict";

let productDatabase = {
  Eggs: 200,
  Milk: 200,
  Fish: 400,
  Apples: 150,
  Bread: 50,
  Chicken: 550
};
console.log("The price of the fist is "+productDatabase.Fish);

let sum: number = 0;
for (let i: number = 0; i<Object.values(productDatabase).length; i++){
    Object.values(productDatabase).forEach(function(num){
        sum=sum+num;
    })
}
console.log(sum);
console.log("The average price is "+(sum/Object.values(productDatabase).length))
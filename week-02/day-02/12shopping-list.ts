"use strict";

let shoppingList: string[] = [
  "egg",
  "milk",
  "fish",
  "apples",
  "bread",
  "chicken"
];
function weHaveMilk(milk: string) {
  if (shoppingList.indexOf(milk) > 0) {
    console.log("Yeah, we need milk");
  } else {
    console.log("we have milk, do not buy more");
  }
}
weHaveBanana("milk");
function weHaveBanana(banana: string) {
    if (shoppingList.indexOf(banana) > 0) {
      console.log("Yeah, we need banana");
    } else {
      console.log("we have banana, do not buy more");
    }
  }
  weHaveBanana("bananas");

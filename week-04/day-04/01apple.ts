"use strict";

let test = require("tape");

class Apple {
  getApple(): string {
    return "apple";
  }
}

test("check if apple", t => {
  let apple1: Apple = new Apple();
  t.equal(apple1.getApple(), "orange");
  t.end();
});

"use strict";

let word1: string = "apple";
let word2: string = "paple";

let test = require("tape");

function isAnagramm(w1: string, w2: string): boolean {
  if (w1.split("").sort().toString() === w2.split("").sort().toString()) {
    return true;
  } else {
    return false;
  }
}

test("see if works", t=> {
    t.equal(isAnagramm(word1, word2), true);
    t.end();
})

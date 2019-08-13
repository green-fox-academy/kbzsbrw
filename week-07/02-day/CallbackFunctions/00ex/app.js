"use strict";

const mapWith = (array, callback) => {
  // The mapWith() function should iterate over the given array and call the callback function on every element.
  // It stores the callback return values in the output.
  // The mapWith() should return with the output array.
  let output = [];
  array.forEach(el => {
    output.push(callback(el));
  });
  return output;
};

const addOne = number => {
  return number + 1;
};

// Exercise 1:

console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]

// Exercise 2:

// Create a callback function which removes every second character from a string
const words = ["map", "reduce", "filter"];
function removeSecondLetter(word) {
  let newWord = "";
  let origWord = word.split("");
  for (let i = 0; i < origWord.length; i++) {
    if ((i + 1) % 2 !== 0) {
      newWord = newWord + origWord[i];
    }
  }
  return newWord;
}

console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']

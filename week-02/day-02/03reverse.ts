"use strict";
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let reversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;
function reverse(letters: string) {
  let reverse: string = "";
  for (let i: number = 0; i < letters.length; i++) {
    reverse += letters.slice(letters.length - i - 1, letters.length - i);
  }
  return reverse;
}

console.log(reverse(reversed));

export = reverse;
/*let proba: string = reversed.slice(0,1);
console.log(proba);
proba += reversed.slice(1,2);
console.log(proba);*/

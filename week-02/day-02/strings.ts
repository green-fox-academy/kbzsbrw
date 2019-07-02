"use strict";

export = {};
//kijelolod ;és aztán duplaquotba rakod, akkor is működik
"double quotes";

let single: string = "single quotes";

let backTick: string = `Today is ${100 ** 2 - 1}`;
console.log(backTick);
console.log(
  single
    .toUpperCase()
    .toLowerCase()
    .toUpperCase()
);
console.log(single.length);
// toUpperCaseAtIndex appletre, 3)---> appLetree
function toUpparCaseAtIndex(text: string, index: number): string {
  let prefix: string = text.slice(0, index);
  let replaceUpperCase: string = text.charAt(index).toUpperCase();
  let suffix: string = text.slice(index + 1);
  return prefix.concat(replaceUpperCase).concat(suffix);
}
console.log(toUpparCaseAtIndex("appletree", 5));

let lettersOfWord: string[] = toUpparCaseAtIndex("appletree", 5).split("");

console.log(lettersOfWord);

let greeting: string = 'hello bello mello';
console.log(greeting.split(" "));

let greetingTheRightWay: string = greeting.replace("mello", "world");
console.log(greetingTheRightWay);

let greeting2: string = 'hello mello bello mello';
console.log(greeting2.split(" "));
// this is with regulet expression. So need to put the world in //, and 'g' stand for global, 'i' stands for insensitive
let greetingTheRightWay2: string = greeting2.replace(/mello/g, "world");
console.log(greetingTheRightWay2);
// with negative numbers: 4 stands for 'after the 4th index. -3 stands for 'until the 3 character from the right'
let textToSlice: string = "1234567890";
let spliced: string = textToSlice.slice(4, -2);
console.log(spliced);
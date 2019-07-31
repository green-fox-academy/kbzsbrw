"use strict";

const fs = require("fs");

function readTxt(filename: string) {
  try {
    let fileText: string = fs.readFileSync(filename, "utf8");
    return fileText;
  } catch (e) {
    console.log("Unable to read file: " + filename);
  }
}
let swears: string[] = [
  "fuck",
  "bloody",
  "cock",
  "shit",
  "fucker",
  "fuckstick",
  "asshole",
  "dick",
  "piss",
  "cunt"
];
function removeSwear(filename: string, swears: string[]): number {
  let text = readTxt(filename);
  let count: number = 0;
  if (text) {
    let textWords: string[] = text.split(" ");
    fs.writeFileSync("newtext.txt", "");
    textWords.forEach(word => {
      swears.forEach(swear => {
        if (word.indexOf(swear) !== -1) {
          count++;
        } else {
        }
      });
      fs.appendFileSync("newtext.txt", word + " ");
    });
  }
  return count;
}
console.log(removeSwear("text.txt", swears));
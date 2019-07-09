// Write a function that takes a filename as a parameter
// The file contains an ended Tic-Tac-Toe match
// We have provided you some example files (draw.txt, win-x.txt, win-o.txt)
// Return "X", "O" or "Draw" based on the input file
"use strict";
export {};

declare function require(path: string): any;
const fs = require("fs");

function ticTacResult(filename: string): string {
  let countX: number = 0;
  let whoWon: string;
  let tictacArray: string = fs.readFileSync(filename, "utf8");
  tictacArray.split("");
  for (let i: number = 0; i <= 3; i + 3) {
    if (
      tictacArray[i] === tictacArray[i + 1] &&
      tictacArray[i] === tictacArray[i + 2]
    ) {
      countX++;
    }
  }
  for (let i: number = 0; i <= 3; i++)
    if (
      tictacArray[i] === tictacArray[i + 3] &&
      tictacArray[i] === tictacArray[i + 6]
    ) {
      countX++;
    }
  if (tictacArray[0] === tictacArray[4] && tictacArray[4] === tictacArray[8]) {
    countX++;
  }
  if (tictacArray[2] === tictacArray[4] && tictacArray[4] === tictacArray[6]) {
    countX++;
  }
  if (countX > 0) {
    whoWon = "x";
  } else {
    whoWon = "0";
  }
  console.log(whoWon);
  return whoWon;
}

// ticTacResult("07win-o.txt");
console.log(ticTacResult("07win-o.txt"));
// Should print "O"

console.log(ticTacResult("07win-x.txt"));
// Should print "X"

console.log(ticTacResult("07draw.txt"));
// Should print "Draw

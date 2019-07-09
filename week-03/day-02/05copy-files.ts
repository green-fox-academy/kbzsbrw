// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

"use strict";
export {};

declare function require(path: string): any;
const fs = require("fs");

function copyContent(originalFilename: string, copiedFilename: string): any {
  try {
    fs.writeFileSync(copiedFilename, fs.readFileSync(originalFilename, "utf8"));
    console.log(true);
  } catch (e) {
    console.log(false);
  }
}

copyContent("05my-file.txt", "05copied-my-file.txt");
copyContent("06my-file.txt", "05copied-my-file.txt");

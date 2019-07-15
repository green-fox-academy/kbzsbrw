// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.
"use strict";
export {};

declare function require(path: string): any;
const fs = require("fs");

//thats for help to check the results
function countLines(filename: string): number {
  try {
    let lines: string[] = fs.readFileSync(filename, "utf8").split("\n");
    return lines.length;
  } catch (e) {
    console.log(0);
  }
}
//this is actually work

function readLogFile(fileName: string) {
  try {
    return fs.readFileSync(fileName,'utf8');
  } catch (error) {
    return "there is no such file";
  }
}
let fileContent: string = readLogFile('06log.txt');
function createLines(fileContent: string):string [] {
  return fileContent.split('\n');
}
function getIpAddresse(line: string): string {
  return line.split('   ')[1];
}
let IPAdresses: string [] = createLines(fileContent)
.map(function(line) {
  return getIpAddresse(line);
})
let uniqueIPAddresses: string [] = [];
for (let index: number = 0; index < IPAdresses.length; index++) {
  const IPAdress: string = IPAdresses[index];
  if (uniqueIPAddresses.indexOf(IPAdress) === -1) {
    uniqueIPAddresses.push(IPAdress);
  }
}
console.log(IPAdresses);
//this is a good solution for get/post ratio
function getPostRatio(fileName: string): number {
  let fileByLines = fs.readFileSync(fileName, "utf8").split("\n");
  let getCount: number = 0;
  let postCount: number = 0;
  //this for loop will count the characters in a line
  // post is more character then get so...
  for (let i: number = 0; i < fileByLines.length; i++) {
    if (fileByLines[i].length === 47) {
      postCount++;
    } else if (fileByLines[i].length === 46) {
      getCount++;
    }
  }
  let ratio: number = getCount / postCount;
  return ratio;
}
console.log(getPostRatio("06log.txt"));

//lets try with string.endsWith

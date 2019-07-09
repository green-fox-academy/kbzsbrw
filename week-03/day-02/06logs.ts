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
//this is actually works
function getIPAddresses(fileName: string): string[] {
  try {
    let ipAddresses: string[] = [];
    let ipSliced: string[] = fs.readFileSync(fileName, "utf8").split("   ");
    for (let i: number = 1; i < ipSliced.length / 2 + 1; i++) {
      ipAddresses.push(ipSliced[i * 2 - 1]);
    }
    return ipAddresses;
  } catch (e) {
    console.log(e.message);
  }
}
getIPAddresses("06log.txt");
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

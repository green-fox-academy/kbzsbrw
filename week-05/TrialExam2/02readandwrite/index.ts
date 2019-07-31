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

function textToLetters(text: string) {
  let characters: string[] = [];
  for (let i: number = 0; i < text.length; i++) {
    if (
      text[i] !== "." &&
      text[i] !== "\n" &&
      text[i] !== " " &&
      text[i] !== "-"
    ) {
      characters.push(text[i]);
    }
  }
  return characters;
}

function countLettersIntoObject(letters: string[]): object {
  let characterCounted: { [k: string]: number } = {};
  for (let i: number = 0; i < letters.length; i++) {
    if (characterCounted[letters[i]] === undefined) {
      characterCounted[letters[i]] = 1;
    } else if (characterCounted[letters[i]] > 0) {
      characterCounted[letters[i]]++;
    }
  }
  return characterCounted;
}

function mostCommonCharacter(filename: string): object {
  let text = readTxt(filename);

  if (text) {
    let letters: string[] = textToLetters(text);
    let countedCharacters: object = countLettersIntoObject(letters);
    let firstLetter = Object.values(countedCharacters).sort(
      (n1, n2) => n2 - n1
    )[0];
    let secondLetter = Object.values(countedCharacters).sort(
      (n1, n2) => n2 - n1
    )[1];
    let mostCommonCharacter: object = {};
    for (let key in countedCharacters) {
      if (countedCharacters[key] === firstLetter) {
        mostCommonCharacter[key] = firstLetter;
      }
    }
    for (let key in countedCharacters) {
      if (countedCharacters[key] === secondLetter) {
        mostCommonCharacter[key] = secondLetter;
      }
    }
    return mostCommonCharacter;
  }
}
console.log(mostCommonCharacter("text.txt"));

"use strict";
import { Domino } from "./domino";

function initializeDominoes(): Domino[] {
  let dominoes: Domino[] = [];
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(6, 7));
  dominoes.push(new Domino(2, 4));
  dominoes.push(new Domino(7, 1));
  return dominoes;
}

function print(dominoes: Domino[]) {
  dominoes.forEach(value => {
    console.log(value);
  });
}
function putFirstValuesInArray(): number[] {
  let valueA: number[] = [];
  for (let i: number = 0; i < dominoes.length; i++) {
    valueA.push(dominoes[i].values[0]);
  }
  return valueA;
}

let dominoes: Domino[] = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

// print(dominoes);
// console.log(dominoes[1].values[0]);

function firstTwoDominoes(): Domino[] {
  let orderedDominoes: Domino[] = [dominoes[0]];
  let FirstValues: number[] = putFirstValuesInArray();
  function findTheFirstDomino() {
    orderedDominoes.push(dominoes[FirstValues.indexOf(dominoes[0].values[1])]);
  }
  findTheFirstDomino();
  return orderedDominoes;
}
function orderedDominoes(): Domino[] {
  let orderedDominoes: Domino[] = [dominoes[0]];
  let FirstValues: number[] = putFirstValuesInArray();
  for (let i: number = 0; i < dominoes.length; i++) {
    orderedDominoes.push(
      dominoes[FirstValues.indexOf(orderedDominoes[i].values[1])]
    );
  }
  return orderedDominoes;
}
print(orderedDominoes());

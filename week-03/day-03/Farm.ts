"use strict";

import { Animal } from "./03animal";

class Farm {
  animals: Animal[] = [];
  private placesForAnimals: number = 5;
  freeSpaces: number;

  add() {
    let animals: Animal[] = [];
    let dog: Animal = new Animal(40, 50);
    let giraffe: Animal = new Animal(30, 50);
    let cat: Animal = new Animal(20, 50);
    let zebra: Animal = new Animal(60, 50);
    animals.push(dog, giraffe, cat, zebra);
    this.animals = animals;
    this.freeSpaces = this.placesForAnimals - animals.length;
  }
  breed(name: string, hunger: number, thirst: number) {
    if (this.freeSpaces > 0) {
      let name: Animal = new Animal(hunger, thirst);
      this.animals.push(name);
      this.freeSpaces--;
    }
  }
  slaughter() {
    let arrayOfHunger: number[] = [];
    for (let i: number = 0; i < this.animals.length; i++) {
        arrayOfHunger.push(this.animals[i].hunger);
    }
    console.log(arrayOfHunger);
    console.log(arrayOfHunger.sort((n1,n2)=> n1 - n2));
    console.log(arrayOfHunger.indexOf([arrayOfHunger.sort((n1,n2)=> n1 - n2)[0]]);
    this.animals.slice(arrayOfHunger.indexOf(arrayOfHunger.sort((n1,n2)=> n1 - n2)[0]),1);
  }
}
let newFarm: Farm = new Farm();
newFarm.add();
// console.log(newFarm);
// console.log(newFarm.animals.length);
newFarm.breed("elephant", 100, 10);
console.log(newFarm);
newFarm.slaughter();
// console.log(newFarm);

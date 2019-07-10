"use strict";

class Animal {
  hunger: number = 50;
  thirst: number = 50;
  constructor(hunger: number, thirst: number) {
    this.hunger = Math.round(hunger);
    this.thirst = Math.round(thirst);
  }
  eat(): void {
    this.hunger--;
  }
  drink(): void {
    this.thirst--;
  }
  play(): void {}
}

let dog: Animal = new Animal(20.2012, 201.012012);

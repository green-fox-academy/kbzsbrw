"use strict";

export class Flower {
  name: string;
  waterAmount: number = 0;

  constructor(name: string) {
    this.name = name;
  }
  needsWater(): string {
    if (this.waterAmount < 5) {
      return "needs water";
    } else {
      return "does not need water";
    }
  }
  getNameAndWater(): void {
    console.log("The " + this.name + " flower " + this.needsWater());
  }
}

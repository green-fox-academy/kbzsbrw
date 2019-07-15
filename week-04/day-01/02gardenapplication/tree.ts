"use strict";

export class Tree {
  name: string;
  waterAmount: number = 0;

  constructor(name: string) {
    this.name = name;
  }
  needsWater(): string {
    if (this.waterAmount < 10) {
      return "needs water";
    } else {
      return "does not need water";
    }
  }
  getNameAndWater(): void {
    console.log("The " + this.name + " tree " + this.needsWater());
  }
}

"use strict";
import { Plant } from './plant';

export class Tree extends Plant {
  constructor(name: string, waterAmount: number = 0) {
    super(name, waterAmount);
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

"use strict";

import { Plant } from './plant';

export class Flower extends Plant {

  constructor(name: string, waterAmount: number = 0) {
      super(name, waterAmount)
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

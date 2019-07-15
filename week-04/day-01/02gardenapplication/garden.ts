"use strict";

import { Tree } from "./tree";
import { Flower } from "./flower";

export class Garden {
  trees: Tree[];
  flowers: Flower[];

  constructor() {
    this.trees = [];
    this.flowers = [];
  }

  addTreeToGarden(treeName: Tree): void {
    this.trees.push(treeName);
  }
  addFlowerToGarden(flowerName: Flower): void {
    this.flowers.push(flowerName);
  }
  showGarden(): void {
    this.flowers.forEach(function(flower) {
      flower.getNameAndWater();
    });
    this.trees.forEach(function(tree) {
      tree.getNameAndWater();
    });
  }
  watering(waterAmount: number): void {
    console.log("Watering with " + waterAmount);
    let countThirsty: number = 0;
    this.flowers.forEach(function(flowerIfThirsty) {
      if (flowerIfThirsty.waterAmount < 5) {
        countThirsty++;
      }
    });
    this.trees.forEach(function(treeIfThirsty) {
      if (treeIfThirsty.waterAmount < 10) {
        countThirsty++;
      }
    });
    this.trees.forEach(function(treeToWater) {
        if (treeToWater.waterAmount<10) {
            treeToWater.waterAmount =+ waterAmount/countThirsty*0.4;
        }
    });
    this.flowers.forEach(function(flowerToWater) {
        if (flowerToWater.waterAmount<5) {
            flowerToWater.waterAmount=+ waterAmount/countThirsty*0.75;
        }
    });
  }
}

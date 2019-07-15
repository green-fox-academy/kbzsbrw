"use strict";

import { Tree } from "./tree";
import { Flower } from "./flower";
import { Garden } from "./garden";

const yellow: Flower = new Flower("yellow");
const blue: Flower = new Flower("blue");
const purple: Tree = new Tree("purple");
const orange: Tree = new Tree("orange");
const garden1: Garden = new Garden();
garden1.addFlowerToGarden(yellow);
garden1.addFlowerToGarden(blue);
garden1.addTreeToGarden(purple);
garden1.addTreeToGarden(orange);
// yellow.getNameAndWater();
garden1.showGarden();
garden1.watering(40);
garden1.showGarden();
garden1.watering(70);
garden1.showGarden();